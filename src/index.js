/* globals clientPath */
const { setupChangeLogs } = require('./changeLogs')

const setupHome = require('./home')
const setupNew = require('./new')
const setupEdit = require('./edit')
const setupView = require('./view')

const startApp = () => {
  if (clientPath === 'home') {
    return setupHome()
  }
  if (clientPath === 'new') {
    return setupNew()
  }
  if (clientPath === 'edit') {
    return setupEdit()
  }
  if (clientPath === 'view') {
    setupView()
    return setupChangeLogs()
  }
}
startApp()
