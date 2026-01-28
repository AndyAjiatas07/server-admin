import Field from "./field.model.js";

export const getFields = async (req, res) => {
    try {
        const { page = 1, limit = 10, isActive } = req.query;
        const filter = { isActive };
        //opciones
        const options = {
            page: parseInt(page),
            limit: parseInt(limit),
            sort: { createdAt: -1 }
        }
        const fields = await Field.find(filter)
            .limit(limit)
            .skip((page - 1) * limit)
            .sort(options.sort);

        const total = await Field.countDocuments(filter);
        res.stutus(200).json({
            success: true,
            data: fields,
            pagination:{
                currentPage: page,
                totalPages: Math.ceil(total / limit),
                totalRecords: total,
             limit:limit
            }

        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message: 'error al cargar los datos',
            error: error.message
        })
    }
}

//export const getFieldById = async(req, res)=>{
  //  try {
        
    //} catch (error) {
        
   // }
//}