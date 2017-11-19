import ProjectService from '../../services/ProjectService'

const appendProjects = projects => {
  return {
    type: 'SUCCESSFUL_PROJECTS_FETCH',
    projects: projects
  }
}

export const fetchProjects = () => {
  return dispatch => {
    ProjectService.fetchProjects()
      .then(projects => {
        dispatch(appendProjects(projects))
      })
  }
}

const appendProject = project => {
  return {
    type: 'SUCCESSFUL_CREATE_PROJECT',
    payload: project
  }
}

export const createProject = (project, routerHistory) => {
  return dispatch => {
    return ProjectService.createProject(project)
      .then(project => {
        dispatch(appendProject(project));
        routerHistory.push('/')
      })
  }
}

const destroyProject = id => {
  return {
    type: 'SUCESSFUL_DELETE_PROJECT',
    id: id
  }
}

export const deleteProject = (project, routerHistory) => {
  const id = project.id
  return dispatch => {
    return ProjectService.deleteProject(project)
      .then(project => {
        dispatch(destroyProject(id))
        routerHistory.push('/');
      })
  }
}