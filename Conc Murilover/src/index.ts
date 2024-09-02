import { input, number } from "@inquirer/prompts";

(async () => {
	const nomeCliente = await input({ message: "Qual Seu nome:" });
    const marcaFavorita = await input({ message: "Qual é sua marca favorita?" });
    const veiculoModelo = await input({ message: "Preferências em modelos de automoveis, se sim qual? " });
    const veiculoCor = await input({ message: "Qual a Cor?" });
    const veiculoPortas = await input({ message: "Quantas portas?" });
    const veiculoMotores = await input({ message: "Preferências em tipos de motores?" });
    const enderecoCliente = await input({ message: "Qual o seu endereço:" });
    const emailCliente = await input({ message: "Email:" });
    const numeroCliente = await input({ message: "Número de telefone:" });

    console.log("Concessionária do Murilover");
const Marcas: string[] = [
    // Marcas de carros
    "Acura","Alfa Romeo","Aston Martin","Audi","Bentley","BMW","Bugatti","Buick","Cadillac","Chevrolet","Chrysler","Volkswagen",
    "Citroën","Dodge","Ferrari","Fiat","Ford","Genesis","GMC","Honda","Hyundai","Infiniti","Jaguar","Jeep","Kia","Suzuki",
    "Koenigsegg","Lamborghini","Land Rover","Lexus","Lincoln","Maserati","Mazda","McLaren","Mercedes-Benz","Mini","Tesla",
    "Mitsubishi","Nissan","Pagani","Peugeot","Porsche","Ram","Renault","Rolls-Royce","Seat","Skoda","Subaru","Toyota","Volvo",
    
    // Marcas de motos
    "Aprilia","Benelli","BMW Motorrad","Ducati","Harley-Davidson","Hero","Honda","Husqvarna","Indian",
    "Kawasaki","KTM","Moto Guzzi","MV Agusta","Royal Enfield","Suzuki","Triumph","Vespa","Yamaha"
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
console.log("")

console.log("Marcas Disponíveis:")
console.log(Marcas);
})();




