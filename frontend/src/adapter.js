class Adapter {
  getHayPatches() {
    const baseURL = 'http://localhost:3000/hay_patches'
    return fetch(baseURL).then(r => r.json())
  }

  // HARDCODED
  getMaze() {
    const baseURL = `http://localhost:3000/mazes/${1}`
    return fetch(baseURL).then(r => r.json())
  }

  getUser(id) {
    const baseURL = `http://localhost:3000/users/${id}`
    return fetch(baseURL).then(r => r.json())
  }
}
