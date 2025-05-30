
import list from "../model/list.js"
import user from "../model/user.js"
export async function listing(req, res) {
    const { name, decription, address, priceregular, priceDiscounded, bathroom, badroom, parking, furnish, offer, type } = req.body;
    const data = await list.create({
        name,
        decription,
        address,
        priceregular,
        priceDiscounded,
        bathroom,
        badroom,
        parking,
        furnish,
        offer,
        type,
        createdby: req.user._id
    })
    console.log(data)
    res.status(201).json({
        sucess:true,
        massage:"List Created",
        data
    })
}