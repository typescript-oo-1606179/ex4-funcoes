function newSection(section: string) {
  console.log("======================================");
  console.group(section);
  console.log("======================================");
}

newSection("VOID");

function retornaVoid(nome?: string): void {
  console.log("Chamando a função com retorno de void");

  if (nome) {
    console.log("🚀 ~ retornaVoid ~ nome:", nome);
  } else {
    console.log("🚀 ~ retornaVoid ~ não possui o argumento nome");
  }
}

retornaVoid("Luciel");

retornaVoid();

const arrowFunctionVoid = (nome?: string): void => {
  console.log("Chamando arrow function com retorno de void");

  if (nome) {
    console.log("🚀 ~ arrowFunctionVoid ~ nome:", nome);
  } else {
    console.log("🚀 ~ arrowFunctionVoid ~ não possui o argumento nome");
  }
};

arrowFunctionVoid("Fulano");
arrowFunctionVoid();

interface ArrowFunctionVoid {
  (nome?: string): void;
}

type ArrowFunctionVoidType = (nome?: string) => void;

const arrowFunctionPorInterface: ArrowFunctionVoid = (nome) => {
  console.log("Chamando arrow function tipada por interface");

  if (nome) {
    console.log("🚀 ~ arrowFunctionVoid ~ nome:", nome);
  } else {
    console.log("🚀 ~ arrowFunctionVoid ~ não possui o argumento nome");
  }
};

arrowFunctionPorInterface();

console.groupEnd();

newSection("STRING");

function retornaString(idade: number): string {
  console.log("Chamando a função com retorno de string");

  return String(idade);
}

console.log("🚀 ~ Retorno de retornaString:", retornaString(789));

console.log("🚀 ~ Retorno de retornaString:", retornaString(6345));

console.groupEnd();

newSection("NUMBER");

function retornaNumber(idade: string): number {
  console.log("Chamando a função com retorno de number");

  let numero = Number(idade);

  if (numero) {
    console.log("🚀 Idade é um número válido");
  } else {
    console.log("🚀 Idade é um número inválido");

    numero = 0;
  }

  return numero;
}

console.log("🚀 ~ Retorno de retornaNumber:", retornaNumber("789"));

console.log("🚀 ~ Retorno de retornaNumber:", retornaNumber("Luciel"));

console.groupEnd();

newSection("BOOLEAN");

function retornaBoolean(idade: number): boolean {
  console.log("Chamando a função com retorno de boolean");

  const maiorDeIdade: boolean = idade >= 18;

  console.log("🚀 ~ retornaBoolean ~ maiorDeIdade:", maiorDeIdade);

  if (maiorDeIdade) {
    console.log("🚀 É maior de idade");
  } else {
    console.log("🚀 Não é maior de idade");
  }

  return maiorDeIdade;
}

console.log("🚀 ~ Retorno de retornaBoolean:", retornaBoolean(64));

console.log("🚀 ~ Retorno de retornaBoolean:", retornaBoolean(6));

console.groupEnd();

newSection("NULL");

function retornaNullOuString(nome: string, busca: string): null | boolean {
  console.log("Chamando a função com retorno de null");

  console.log("🚀 ~ retornaNull ~ nome:", nome);

  const possuiBusca = nome.includes(busca);

  console.log("🚀 ~ retornaNull ~ possuiBusca:", possuiBusca);

  if (possuiBusca) {
    console.log(`🚀 ~ A string ${nome} possui o termo ${busca}`);

    return true;
  }

  console.log(`🚀 ~ A string ${nome} NÃO possui o termo ${busca}`);

  return null;
}

console.log(
  "🚀 ~ Retorno de retornaNullOuString:",
  retornaNullOuString("Luciel", "e")
);

console.log(
  "🚀 ~ Retorno de retornaNullOuString:",
  retornaNullOuString("Luciel", "a")
);

console.groupEnd();

newSection("UNDEFINED");

function retornaUndefined(nome: string): undefined {
  console.log("Chamando a função com retorno de undefined");

  console.log("🚀 ~ retornaUndefined ~ nome:", nome);
}

console.log("🚀 ~ Retorno de retornaUndefined:", retornaUndefined("Luciel"));

console.groupEnd();

newSection("ARRAY");

function retornaArray(nome: string): Array<string> | string[] {
  console.log("Chamando a função com retorno de array");

  const letras = nome.split("");

  return letras;
}

console.log("🚀 ~ Retorno de retornaArray:", retornaArray("Luciel"));

function montaTupla(id: number, nome: string): [number, string] {
  console.log("Chamando a função com retorno de tupla");

  return [id, nome];
}

console.log("🚀 ~ Retorno de montaTupla:", montaTupla(57, "Luciel"));

console.groupEnd();

newSection("ANY");

function retornaAny(parametro: any): any {
  console.log("Chamando a função com retorno de any");

  if (typeof parametro === "string") {
    console.log("🚀 O parâmetro é uma string");

    return parametro.toUpperCase();
  }

  if (typeof parametro === "number") {
    console.log("🚀 O parâmetro é um number");

    return parametro + 10;
  }

  if (typeof parametro === "boolean") {
    console.log("🚀 O parâmetro é um boolean");

    return parametro;
  }

  return parametro;
}

console.log("🚀 ~ Retorno de retornaAny:", retornaAny("Luciel"));

console.log("🚀 ~ Retorno de retornaAny:", retornaAny(87));

console.log("🚀 ~ Retorno de retornaAny:", retornaAny(true));

console.log("🚀 ~ Retorno de retornaAny:", retornaAny(null));

console.groupEnd();

newSection("OBJETOS");

interface RetornoDeObjeto {
  id: number;
  nome: string;
  [key: string]: any;
}

function retornaObjeto(id: number, nome: string): RetornoDeObjeto {
  console.log("Chamando a função com retorno de objeto");

  const usuario: RetornoDeObjeto = {
    id: id,
    nome: nome,
    status: true,
  };

  return usuario;
}

console.log("🚀 ~ Retorno de retornaObjeto:", retornaObjeto(56, "Luciel"));

console.groupEnd();

newSection("ENUM");

enum Colors {
  VERMELHO = "RED",
  BRANCO = "WHITE",
  PRETO = "BLACK",
}

interface Paleta {
  dono: string;
  cor: Colors;
}

function retornaEnum(paleta: Paleta): Colors {
  console.log("Chamando a função com retorno de Enum");

  console.log("🚀 ~ retornaEnum ~ paleta:", paleta);

  return paleta.cor;
}

const paletaLuciel: Paleta = {
  dono: "Luciel",
  cor: Colors.VERMELHO,
};

const paletaFulano: Paleta = {
  dono: "Fulano",
  cor: Colors.PRETO,
};

console.log("🚀 ~ Retorno de retornaEnum:", retornaEnum(paletaLuciel));

console.log("🚀 ~ Retorno de retornaEnum:", retornaEnum(paletaFulano));
