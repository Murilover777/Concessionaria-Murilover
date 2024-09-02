"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts_1 = require("@inquirer/prompts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const nomeCliente = yield (0, prompts_1.input)({ message: "Qual Seu nome:" });
    const marcaFavorita = yield (0, prompts_1.input)({ message: "Qual é sua marca favorita?" });
    const veiculoModelo = yield (0, prompts_1.input)({ message: "Preferências em modelos de automoveis, se sim qual? " });
    const veiculoCor = yield (0, prompts_1.input)({ message: "Qual a Cor?" });
    const veiculoPortas = yield (0, prompts_1.input)({ message: "Quantas portas?" });
    const veiculoMotores = yield (0, prompts_1.input)({ message: "Preferências em tipos de motores?" });
    const enderecoCliente = yield (0, prompts_1.input)({ message: "Qual o seu endereço:" });
    const emailCliente = yield (0, prompts_1.input)({ message: "Email:" });
    const numeroCliente = yield (0, prompts_1.input)({ message: "Número de telefone:" });
    console.log("Concessionária do Murilover");
    const Marcas = [
        // Marcas de carros
        "Acura", "Alfa Romeo", "Aston Martin", "Audi", "Bentley", "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Volkswagen",
        "Citroën", "Dodge", "Ferrari", "Fiat", "Ford", "Genesis", "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Suzuki",
        "Koenigsegg", "Lamborghini", "Land Rover", "Lexus", "Lincoln", "Maserati", "Mazda", "McLaren", "Mercedes-Benz", "Mini", "Tesla",
        "Mitsubishi", "Nissan", "Pagani", "Peugeot", "Porsche", "Ram", "Renault", "Rolls-Royce", "Seat", "Skoda", "Subaru", "Toyota", "Volvo",
        // Marcas de motos
        "Aprilia", "Benelli", "BMW Motorrad", "Ducati", "Harley-Davidson", "Hero", "Honda", "Husqvarna", "Indian",
        "Kawasaki", "KTM", "Moto Guzzi", "MV Agusta", "Royal Enfield", "Suzuki", "Triumph", "Vespa", "Yamaha"
    ];
    Marcas.sort(); // Organizador de lista em ordem alfabética;
    console.log("Ficha de escolhas da Concessionária du Murilover:");
    console.log("");
    console.log("Informações do Cliente:");
    console.log("Nome:", nomeCliente);
    console.log("Endereço:", enderecoCliente);
    console.log("Email:", emailCliente);
    console.log("Número:", numeroCliente);
    console.log("");
    console.log("Ficha do automóvel:");
    console.log("Marca favorita do cliente:", marcaFavorita);
    console.log("Modelo / tipo do veículo:", veiculoModelo);
    console.log("Cor:", veiculoCor);
    console.log("Quantidade de portas:", veiculoPortas);
    console.log("Tipo de motor:", veiculoMotores);
    console.log("");
    console.log("Marcas Disponíveis:");
    console.log(Marcas);
}))();
