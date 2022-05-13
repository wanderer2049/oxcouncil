import React, { Component } from "react";

import {
  Box,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

import ProjectPreview from './projectPreview';
import Project from '../lib/types/project';

type Props = {
  projects: Project[]
}

const ProjectList = ({ projects }: Props) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  return (
    <>
      <Box 
        my={12}
        overflow={'hidden'}
      >
        <SimpleGrid columns={{ 'base':1, 'md':2 }} spacing={10}>
        {projects.map((project, index) => (
          <Box key={index}>
            <Box
              bg={bgColor}
              borderRadius={15}
              overflow={'hidden'}
              key={index}
            >
              <ProjectPreview
                title={project.title}
                logo={project.logo}
                tagline={project.tagline}
                featureImage={project.featureImage}
                slug={project.slug}
                date={project.date}
                content={project.content}
              />
            </Box>
          </Box>
        ))}
        </SimpleGrid>
      </Box>
    </>
  );
}

export default ProjectList;