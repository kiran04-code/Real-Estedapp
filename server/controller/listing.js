import list from "../model/list.js"

export async function listing(req, res) {
    const data = await list.create(req.body)
    res.status(2001).json({
        sucess:true,
        massage:"List Created",
        data
    })
}