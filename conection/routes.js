import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { Router } from "express";

dotenv.config();

const router = Router();
const database = process.env.MONGO_URI;
const nombreBase = "MicroservicioCL_EPS";

//Punto 1
router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection
      .find()
      .sort({
        usu_nombre: 1,
        usu_segundo_nombre: 1,
        usu_primer_apellido_usuar: 1,
        usu_segundo_apellido_usuar: 1,
      })
      .toArray();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

//Punto 2
router.get("/citas/filtrarNombre", async (req, res) => {
  try {
    const { fecha } = req.query;
    console.log(fecha);
    const fechaParseada = new Date(fecha).toDateString();
    console.log(fechaParseada);
    console.log(`${fecha}T00:00:00Z`);
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("cita");

    const result = await colection
      .find({
        cit_date: {
          $gte: Date.parse(`${fecha}T00:00:00Z`),
          $lte: Date.parse(`${fecha}T23:59:59Z`),
        },
      })
      .toArray();
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/medicos/filtro", async (req, res) => {
  try {
    const { params } = req.query;
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("medico");

    const firstresult = await colection.find({}).toArray();

    const result = firstresult.filter((ele) => {
      return ele.med_especialidad.esp_nombre === params;
    });
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

router.get("/organizarNombre", async (req, res) => {
  try {
    const client = new MongoClient(database);
    await client.connect();
    const db = client.db(nombreBase);
    const colection = db.collection("usuario");

    const result = await colection.find();

    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(404).json("No se reconoce el dato");
  }
});

export default router;
