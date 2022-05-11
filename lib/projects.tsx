import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const projectsDirectory = join(process.cwd(), 'projects');

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory);
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(projectsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string
  }

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort projects by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return projects;
}