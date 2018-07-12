class Adapter {
  getHayPatches() {
    const baseURL = 'http://localhost:3000/hay_patches'
    return fetch(baseURL).then(r => r.json())
  }

  getMaze(id) {
    const baseURL = `http://localhost:3000/mazes/${id}`
    return fetch(baseURL).then(r => r.json())
  }

  getUser(id) {
    const baseURL = `http://localhost:3000/users/${id}`
    return fetch(baseURL).then(r => r.json())
  }

  getCharacters() {
    const baseURL = `http://localhost:3000/characters/`
    return fetch(baseURL).then(r => r.json())
  }

}
