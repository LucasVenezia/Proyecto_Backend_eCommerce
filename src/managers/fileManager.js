const fs = require('fs');
const path = require('path');

class FileManager {
  constructor(list) {
    this.id = 0;
    this.path = path.join(__dirname, `../files/lists/${list}.json`);

    if (fs.existsSync(this.path)) {
      this.items = JSON.parse(fs.readFileSync(this.path))

      if (this.items.length > 0) {
        this.id = parseInt(this.items[this.items.length - 1].id)
      }
    }
    else {
      fs.writeFileSync(this.path, JSON.stringify([],null,2))
      this.items = []
    }
  };

  persist() {
    fs.writeFileSync(this.path, JSON.stringify(this.items,null,2))
  };

  all() {
    return this.items
  };

  create(data) {
    this.id += 1
    const item = {
      id: this.id,
      ...data
    }
    this.items.push(item)
    this.persist()
    return item
  };

  find(id) {
    const item = this.items.find(item => item.id == id)

    if (item) return item
    else throw Error(`Item #${id} no encontrado`)
  };

  update(id, data) {
    try {
      let item = this.find(id)
      const index = this.items.indexOf(item)
      item = { ...item, ...data }
      this.items.splice(index, 1, item)
      this.persist()
      return item
    }
    catch (err) {
      throw Error(err.message)
    }
  };

  delete(id) {
    try {
      const item = this.find(id)
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
      this.persist()
      return item
    }
    catch (err) {
      throw Error(err.message)
    }
  };
};

module.exports = FileManager;