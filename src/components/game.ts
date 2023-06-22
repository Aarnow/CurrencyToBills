import fs from 'fs';


class Game {
    private items: any[];
  
    constructor() {
        this.items = [];
        this.initialize();
    }

    public async initialize() {
        await this.loadItems();
    }

    private readJSONFile = (filePath: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                reject(err);
                } else {
                resolve(JSON.parse(data));
                }
            });
        });
    };

    private async loadItems() : Promise<any> {
        try {
          const parsedData = await this.readJSONFile("./data/items.json");
          console.log("parsedData", parsedData)
          this.items = parsedData.items;
          console.log("this.items",this.items)
  
        } catch (error) {
          console.error('Erreur lors du chargement des items :', error);
          this.items = [];
        }
      }

    public getItemById(id: number) {
        return this.items.find((item) => item.id === id);
    }
}

export default Game;
  