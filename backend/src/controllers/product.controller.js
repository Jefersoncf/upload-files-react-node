import Product from "../models/Product.js";
import path from "path";
import fs from "fs";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getProductById = async (req, res) => {
  try {
    const response = await Product.findOne({
      where: { id: req.params.id },
    });
    res.json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const saveProduct = async (req, res) => {
  if (req.files === null)
    return res.status(404).json({ msg: "Erro ao fazer o upload" });
  const name = req.body.title;
  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/uploads/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];
  if (!allowedType.includes(ext.toLowerCase()))
    return res.status(422).json({ msg: "Imagem Invalida" });
  if (fileSize > 5000000)
    return res.status(422).json({ msg: "Imagem não pode ser maior que 5 MB" });

  file.mv(`./public/uploads/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await Product.create({ name: name, image: fileName, url: url });
      res.status(201).json({ msg: "Produto criado com sucesso" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

export const updateProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });
  let fileName = "";
  if (req.files === null) {
    fileName = Product.image;
  } else {
    const file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLowerCase()))
      return res.status(422).json({ msg: "Imagem Invalida" });
    if (fileSize > 5000000)
      return res
        .status(422)
        .json({ msg: "Imagem não pode ser maior que 5 MB" });

    const filepath = `./public/uploads/${product.image}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/uploads/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const name = req.body.title;
  const url = `${req.protocol}://${req.get("host")}/uploads/${fileName}`;

  try {
    await Product.update(
      { name: name, image: fileName, url: url },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: "Produto atualizado com sucesso!" });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!product) return res.status(404).json({ msg: "Product not found" });

  try {
    const filepath = `./public/uploads/${product.image}`;
    fs.unlinkSync(filepath);
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Produto apagado com susseço!" });
  } catch (e) {
    console.log(e.message);
  }
};
