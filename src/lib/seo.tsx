export function returnPathAsSeoTitle(path: String) {
  let seoTitle = path.split('/').pop();

  if(seoTitle) {
    seoTitle = seoTitle.replace(/\-/g,' ')
    seoTitle = seoTitle.charAt(0).toUpperCase() + seoTitle.slice(1)
    
    return seoTitle;
  }

  else {
    return 'Home'
  }
}