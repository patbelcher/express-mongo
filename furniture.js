import db from './mongoConnect.js'

const furnitureDb = db.collection('furniture')

export const addFurniture = async(req, res) => {
    //add furniture to our mongo db

   /* const newFurniture = {type:'sofa', 
                            collection:'Edgewater',
                            special: false,
                            price: 4899,
                            in_Stock: false
                        } */
    
    const newFurnitureAdded = await furnitureDb.insertOne(req.body)
    console.log(newFurnitureAdded)
    res.status(201).send(newFurnitureAdded)
}

export const getAllFurniture = async(req, res) => {
//send all furniture back to client

try {
const allFurniture = await furnitureDb.find({}).toArray()
res.status(200).send(allFurniture)
} catch (error){
    res.status(404).send(error)
}
}


// export const finAndDelete = async(req, res) => {
//     //add furniture to our mongo db

//    /* const newFurniture = {type:'sofa', 
//                             collection:'Edgewater',
//                             special: false,
//                             price: 4899,
//                             in_Stock: false
//                         } */
    
//     const removeFurniture = await furnitureDb.findOneAndDelete(req.body)
//     console.log("found and deleted")
//     res.status(201).send(removeFurniture)
// }

// const {furnId} = req.params
// await coll.deleteOne({ price: 4899 });
// res.status(204).send(removeFurniture)

export const finAndDelete = async (req, res) => {
    try {
      const { furnId } = req.params;
  
      const result = await furnitureDb.deleteOne({ _id: furnId });
      if (result.deletedCount === 0) {
        // If no document was deleted, return an error response
        return res.status(404).json({ error: "Furniture not found" });
      }
  
      console.log("Found and deleted:", furnId);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting furniture:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  
  
  
  
  
  