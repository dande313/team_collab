import ProjectService from '../../services/ProjectService'

const prependProjects = projects => {
  let sorted_projects = projects.sort(function(a,b) {
    return a.created_at - b.created_at
  })

  return {
    type: 'SUCCESSFUL_PROJECTS_FETCH',
    projects: sorted_projects
  }
}

export const fetchProjects = () => {
  return dispatch => {
    ProjectService.fetchProjects()
      .then(projects => {
        dispatch(prependProjects(projects))
      })
  }
}

const prependProject = project => {
  return {
    type: 'SUCCESSFUL_CREATE_PROJECT',
    payload: project
  }
}

export const createProject = (project, routerHistory) => {
  return dispatch => {
    return ProjectService.createProject(project)
      .then(project => {
        dispatch(prependProject(project));
        routerHistory.push('/projects')
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
        routerHistory.push('/projects');
      })
  }
}