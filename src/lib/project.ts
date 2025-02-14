import projects from '../data/projects/project.json'

export interface IProject {
  title: string
  contractValue: string
  systems: string[]
  image: string
}

export const getProjects = projects.projects.map((project) => {
  return {
    title: project.project_name,
    contractValue: project.project_contract_value,
    systems: project.project_system.split(',').map((s) => s.trim()),
    image: new URL(`../data/projects/images/${project.project_image}`, import.meta.url).href,
  }
})
