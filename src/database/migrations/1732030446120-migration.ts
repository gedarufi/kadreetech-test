import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1732030446120 implements MigrationInterface {
  name = 'Migration1732030446120';
  divipolaData = [
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5001,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MEDELLÍN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5002,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ABEJORRAL"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5004,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ABRIAQUÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5021,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ALEJANDRÍA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5030,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "AMAGÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5031,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "AMALFI"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5034,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ANDES"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5036,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ANGELÓPOLIS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5038,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ANGOSTURA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5040,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ANORÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5042,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SANTA FÉ DE ANTIOQUIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5044,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ANZÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5045,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "APARTADÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5051,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ARBOLETES"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5055,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ARGELIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5059,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ARMENIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5079,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BARBOSA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5086,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BELMIRA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5088,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BELLO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5091,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BETANIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5093,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BETULIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5101,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CIUDAD BOLÍVAR"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5107,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BRICEÑO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5113,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "BURITICÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5120,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CÁCERES"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5125,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAICEDO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5129,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CALDAS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5134,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAMPAMENTO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5138,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAÑASGORDAS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5142,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CARACOLÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5145,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CARAMANTA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5147,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAREPA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5148,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "EL CARMEN DE VIBORAL"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5150,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAROLINA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5154,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CAUCASIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5172,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CHIGORODÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5190,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CISNEROS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5197,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "COCORNÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5206,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CONCEPCIÓN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5209,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "CONCORDIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5212,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "COPACABANA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5234,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "DABEIBA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5237,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "DONMATÍAS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5240,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "EBÉJICO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5250,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "EL BAGRE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5264,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ENTRERRÍOS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5266,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ENVIGADO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5282,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "FREDONIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5284,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "FRONTINO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5306,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GIRALDO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5308,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GIRARDOTA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5310,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GÓMEZ PLATA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5313,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GRANADA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5315,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GUADALUPE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5318,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GUARNE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5321,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "GUATAPÉ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5347,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "HELICONIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5353,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "HISPANIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5360,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ITAGÜÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5361,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ITUANGO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5364,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "JARDÍN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5368,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "JERICÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5376,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "LA CEJA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5380,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "LA ESTRELLA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5390,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "LA PINTADA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5400,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "LA UNIÓN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5411,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "LIBORINA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5425,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MACEO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5440,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MARINILLA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5467,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MONTEBELLO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5475,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MURINDÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5480,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "MUTATÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5483,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "NARIÑO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5490,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "NECOCLÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5495,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "NECHÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5501,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "OLAYA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5541,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PEÑOL"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5543,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PEQUE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5576,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PUEBLORRICO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5579,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PUERTO BERRÍO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5585,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PUERTO NARE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5591,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "PUERTO TRIUNFO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5604,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "REMEDIOS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5607,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "RETIRO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5615,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "RIONEGRO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5628,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SABANALARGA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5631,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SABANETA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5642,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SALGAR"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5647,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN ANDRÉS DE CUERQUÍA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5649,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN CARLOS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5652,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN FRANCISCO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5656,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN JERÓNIMO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5658,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN JOSÉ DE LA MONTAÑA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5659,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN JUAN DE URABÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5660,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN LUIS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5664,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN PEDRO DE LOS MILAGROS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5665,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN PEDRO DE URABÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5667,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN RAFAEL"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5670,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN ROQUE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5674,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SAN VICENTE FERRER"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5679,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SANTA BÁRBARA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5686,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SANTA ROSA DE OSOS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5690,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SANTO DOMINGO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5697,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "EL SANTUARIO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5736,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SEGOVIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5756,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SONSÓN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5761,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "SOPETRÁN"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5789,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TÁMESIS"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5790,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TARAZÁ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5792,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TARSO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5809,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TITIRIBÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5819,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TOLEDO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5837,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "TURBO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5842,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "URAMITA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5847,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "URRAO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5854,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "VALDIVIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5856,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "VALPARAÍSO"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5858,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "VEGACHÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5861,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "VENECIA"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5873,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "VIGÍA DEL FUERTE"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5885,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "YALÍ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5887,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "YARUMAL"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5890,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "YOLOMBÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5893,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "YONDÓ"
    },
    {
      "CodDepartamento": 5,
      "CodMunicipio": 5895,
      "NomDepartamento": "ANTIOQUIA",
      "NomMunicipio": "ZARAGOZA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8001,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "BARRANQUILLA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8078,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "BARANOA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8137,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "CAMPO DE LA CRUZ"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8141,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "CANDELARIA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8296,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "GALAPA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8372,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "JUAN DE ACOSTA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8421,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "LURUACO"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8433,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "MALAMBO"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8436,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "MANATÍ"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8520,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "PALMAR DE VARELA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8549,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "PIOJÓ"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8558,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "POLONUEVO"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8560,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "PONEDERA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8573,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "PUERTO COLOMBIA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8606,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "REPELÓN"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8634,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SABANAGRANDE"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8638,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SABANALARGA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8675,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SANTA LUCÍA"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8685,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SANTO TOMÁS"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8758,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SOLEDAD"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8770,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "SUAN"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8832,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "TUBARÁ"
    },
    {
      "CodDepartamento": 8,
      "CodMunicipio": 8849,
      "NomDepartamento": "ATLÁNTICO",
      "NomMunicipio": "USIACURÍ"
    },
    {
      "CodDepartamento": 11,
      "CodMunicipio": 11001,
      "NomDepartamento": "BOGOTÁ. D.C.",
      "NomMunicipio": "BOGOTÁ. D.C."
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13001,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CARTAGENA DE INDIAS"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13006,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ACHÍ"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13030,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ALTOS DEL ROSARIO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13042,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ARENAL"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13052,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ARJONA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13062,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ARROYOHONDO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13074,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "BARRANCO DE LOBA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13140,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CALAMAR"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13160,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CANTAGALLO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13188,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CICUCO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13212,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CÓRDOBA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13222,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "CLEMENCIA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13244,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "EL CARMEN DE BOLÍVAR"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13248,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "EL GUAMO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13268,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "EL PEÑÓN"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13300,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "HATILLO DE LOBA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13430,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MAGANGUÉ"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13433,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MAHATES"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13440,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MARGARITA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13442,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MARÍA LA BAJA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13458,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MONTECRISTO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13468,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SANTA CRUZ DE MOMPOX"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13473,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "MORALES"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13490,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "NOROSÍ"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13549,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "PINILLOS"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13580,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "REGIDOR"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13600,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "RÍO VIEJO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13620,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN CRISTÓBAL"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13647,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN ESTANISLAO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13650,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN FERNANDO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13654,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN JACINTO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13655,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN JACINTO DEL CAUCA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13657,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN JUAN NEPOMUCENO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13667,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN MARTÍN DE LOBA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13670,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SAN PABLO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13673,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SANTA CATALINA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13683,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SANTA ROSA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13688,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SANTA ROSA DEL SUR"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13744,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SIMITÍ"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13760,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "SOPLAVIENTO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13780,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "TALAIGUA NUEVO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13810,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "TIQUISIO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13836,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "TURBACO"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13838,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "TURBANÁ"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13873,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "VILLANUEVA"
    },
    {
      "CodDepartamento": 13,
      "CodMunicipio": 13894,
      "NomDepartamento": "BOLÍVAR",
      "NomMunicipio": "ZAMBRANO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15001,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TUNJA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15022,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "ALMEIDA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15047,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "AQUITANIA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15051,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "ARCABUCO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15087,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BELÉN"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15090,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BERBEO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15092,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BETÉITIVA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15097,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BOAVITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15104,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BOYACÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15106,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BRICEÑO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15109,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BUENAVISTA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15114,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "BUSBANZÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15131,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CALDAS"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15135,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CAMPOHERMOSO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15162,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CERINZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15172,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHINAVITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15176,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHIQUINQUIRÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15180,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHISCAS"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15183,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15185,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHITARAQUE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15187,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHIVATÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15189,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CIÉNEGA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15204,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CÓMBITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15212,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "COPER"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15215,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CORRALES"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15218,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "COVARACHÍA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15223,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CUBARÁ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19318,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "GUAPI"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15224,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CUCAITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15226,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CUÍTIVA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15232,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHÍQUIZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15236,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "CHIVOR"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15238,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "DUITAMA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15244,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "EL COCUY"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15248,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "EL ESPINO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15272,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "FIRAVITOBA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15276,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "FLORESTA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15293,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GACHANTIVÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15296,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GÁMEZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15299,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GARAGOA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15317,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GUACAMAYAS"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15322,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GUATEQUE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15325,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GUAYATÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15332,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "GÜICÁN DE LA SIERRA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15362,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "IZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15367,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "JENESANO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15368,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "JERICÓ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15377,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "LABRANZAGRANDE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15380,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "LA CAPILLA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15401,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "LA VICTORIA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15403,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "LA UVITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15407,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "VILLA DE LEYVA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15425,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MACANAL"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15442,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MARIPÍ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15455,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MIRAFLORES"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15464,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MONGUA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15466,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MONGUÍ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15469,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MONIQUIRÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15476,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MOTAVITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15480,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "MUZO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15491,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "NOBSA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15494,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "NUEVO COLÓN"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15500,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "OICATÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15507,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "OTANCHE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15511,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PACHAVITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15514,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PÁEZ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15516,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PAIPA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15518,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PAJARITO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15522,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PANQUEBA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15531,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PAUNA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15533,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PAYA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15537,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PAZ DE RÍO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15542,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PESCA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15550,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PISBA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15572,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "PUERTO BOYACÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15580,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "QUÍPAMA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15599,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "RAMIRIQUÍ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15600,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "RÁQUIRA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15621,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "RONDÓN"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15632,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SABOYÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15638,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SÁCHICA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15646,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAMACÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15660,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN EDUARDO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15664,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN JOSÉ DE PARE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15667,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN LUIS DE GACENO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15673,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN MATEO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15676,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN MIGUEL DE SEMA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15681,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SAN PABLO DE BORBUR"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15686,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SANTANA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15690,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SANTA MARÍA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15693,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SANTA ROSA DE VITERBO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15696,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SANTA SOFÍA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15720,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SATIVANORTE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15723,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SATIVASUR"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15740,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SIACHOQUE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15753,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOATÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15755,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOCOTÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15757,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOCHA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15759,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOGAMOSO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15761,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOMONDOCO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15762,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SORA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15763,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SOTAQUIRÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15764,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SORACÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15774,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SUSACÓN"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15776,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SUTAMARCHÁN"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15778,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "SUTATENZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15790,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TASCO"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15798,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TENZA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15804,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TIBANÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15806,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TIBASOSA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15808,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TINJACÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15810,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TIPACOQUE"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15814,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TOCA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15816,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TOGÜÍ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15820,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TÓPAGA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15822,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TOTA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15832,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TUNUNGUÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15835,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TURMEQUÉ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15837,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TUTA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15839,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "TUTAZÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15842,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "ÚMBITA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15861,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "VENTAQUEMADA"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15879,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "VIRACACHÁ"
    },
    {
      "CodDepartamento": 15,
      "CodMunicipio": 15897,
      "NomDepartamento": "BOYACÁ",
      "NomMunicipio": "ZETAQUIRA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17001,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "MANIZALES"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17013,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "AGUADAS"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17042,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "ANSERMA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17050,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "ARANZAZU"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17088,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "BELALCÁZAR"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17174,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "CHINCHINÁ"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17272,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "FILADELFIA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17380,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "LA DORADA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17388,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "LA MERCED"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17433,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "MANZANARES"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17442,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "MARMATO"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17444,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "MARQUETALIA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17446,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "MARULANDA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17486,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "NEIRA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17495,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "NORCASIA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17513,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "PÁCORA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17524,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "PALESTINA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17541,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "PENSILVANIA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17614,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "RIOSUCIO"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17616,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "RISARALDA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17653,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "SALAMINA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17662,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "SAMANÁ"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17665,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "SAN JOSÉ"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17777,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "SUPÍA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17867,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "VICTORIA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17873,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "VILLAMARÍA"
    },
    {
      "CodDepartamento": 17,
      "CodMunicipio": 17877,
      "NomDepartamento": "CALDAS",
      "NomMunicipio": "VITERBO"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18001,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "FLORENCIA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18029,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "ALBANIA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18094,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "BELÉN DE LOS ANDAQUÍES"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18150,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "CARTAGENA DEL CHAIRÁ"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18205,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "CURILLO"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18247,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "EL DONCELLO"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18256,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "EL PAUJÍL"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18410,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "LA MONTAÑITA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18460,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "MILÁN"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18479,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "MORELIA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18592,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "PUERTO RICO"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18610,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "SAN JOSÉ DEL FRAGUA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18753,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "SAN VICENTE DEL CAGUÁN"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18756,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "SOLANO"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18785,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "SOLITA"
    },
    {
      "CodDepartamento": 18,
      "CodMunicipio": 18860,
      "NomDepartamento": "CAQUETÁ",
      "NomMunicipio": "VALPARAÍSO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19001,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "POPAYÁN"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19022,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "ALMAGUER"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19050,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "ARGELIA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19075,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "BALBOA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19100,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "BOLÍVAR"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19110,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "BUENOS AIRES"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19130,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "CAJIBÍO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19137,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "CALDONO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19142,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "CALOTO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19212,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "CORINTO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19256,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "EL TAMBO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19290,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "FLORENCIA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19300,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "GUACHENÉ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19355,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "INZÁ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19364,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "JAMBALÓ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19392,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "LA SIERRA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19397,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "LA VEGA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19418,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "LÓPEZ DE MICAY"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19450,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "MERCADERES"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19455,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "MIRANDA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19473,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "MORALES"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19513,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PADILLA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19517,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PÁEZ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19532,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PATÍA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19533,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PIAMONTE"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19548,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PIENDAMÓ - TUNÍA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19573,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PUERTO TEJADA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19585,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "PURACÉ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19622,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "ROSAS"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19693,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SAN SEBASTIÁN"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19698,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SANTANDER DE QUILICHAO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19701,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SANTA ROSA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19743,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SILVIA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19760,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SOTARÁ PAISPAMBA"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19780,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SUÁREZ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19785,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "SUCRE"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19807,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "TIMBÍO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19809,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "TIMBIQUÍ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19821,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "TORIBÍO"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19824,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "TOTORÓ"
    },
    {
      "CodDepartamento": 19,
      "CodMunicipio": 19845,
      "NomDepartamento": "CAUCA",
      "NomMunicipio": "VILLA RICA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20001,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "VALLEDUPAR"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20011,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "AGUACHICA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20013,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "AGUSTÍN CODAZZI"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20032,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "ASTREA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20045,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "BECERRIL"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20060,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "BOSCONIA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20175,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "CHIMICHAGUA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20178,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "CHIRIGUANÁ"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20228,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "CURUMANÍ"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20238,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "EL COPEY"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20250,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "EL PASO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20295,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "GAMARRA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20310,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "GONZÁLEZ"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20383,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "LA GLORIA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20400,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "LA JAGUA DE IBIRICO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20443,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "MANAURE BALCÓN DEL CESAR"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20517,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "PAILITAS"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20550,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "PELAYA"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20570,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "PUEBLO BELLO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20614,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "RÍO DE ORO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20621,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "LA PAZ"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20710,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "SAN ALBERTO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20750,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "SAN DIEGO"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20770,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "SAN MARTÍN"
    },
    {
      "CodDepartamento": 20,
      "CodMunicipio": 20787,
      "NomDepartamento": "CESAR",
      "NomMunicipio": "TAMALAMEQUE"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23001,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "MONTERÍA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23068,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "AYAPEL"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23079,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "BUENAVISTA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23090,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "CANALETE"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23162,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "CERETÉ"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23168,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "CHIMÁ"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23182,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "CHINÚ"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23189,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "CIÉNAGA DE ORO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23300,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "COTORRA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23350,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "LA APARTADA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23417,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "LORICA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23419,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "LOS CÓRDOBAS"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23464,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "MOMIL"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23466,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "MONTELÍBANO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23500,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "MOÑITOS"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23555,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "PLANETA RICA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23570,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "PUEBLO NUEVO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23574,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "PUERTO ESCONDIDO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23580,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "PUERTO LIBERTADOR"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23586,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "PURÍSIMA DE LA CONCEPCIÓN"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23660,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAHAGÚN"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23670,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN ANDRÉS DE SOTAVENTO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23672,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN ANTERO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23675,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN BERNARDO DEL VIENTO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23678,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN CARLOS"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23682,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN JOSÉ DE URÉ"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23686,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "SAN PELAYO"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23807,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "TIERRALTA"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23815,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "TUCHÍN"
    },
    {
      "CodDepartamento": 23,
      "CodMunicipio": 23855,
      "NomDepartamento": "CÓRDOBA",
      "NomMunicipio": "VALENCIA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25001,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "AGUA DE DIOS"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25019,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ALBÁN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25035,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ANAPOIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25040,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ANOLAIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25053,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ARBELÁEZ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25086,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "BELTRÁN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25095,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "BITUIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25099,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "BOJACÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25120,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CABRERA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25123,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CACHIPAY"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25126,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CAJICÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25148,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CAPARRAPÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25151,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CÁQUEZA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25154,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CARMEN DE CARUPA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25168,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CHAGUANÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25175,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CHÍA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25178,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CHIPAQUE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25181,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CHOACHÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25183,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CHOCONTÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25200,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "COGUA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25214,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "COTA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25224,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "CUCUNUBÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25245,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "EL COLEGIO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25258,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "EL PEÑÓN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25260,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "EL ROSAL"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25269,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FACATATIVÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25279,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FÓMEQUE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25281,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FOSCA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25286,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FUNZA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25288,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FÚQUENE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25290,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "FUSAGASUGÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25293,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GACHALÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25295,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GACHANCIPÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25297,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GACHETÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25299,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GAMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25307,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GIRARDOT"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25312,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GRANADA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25317,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUACHETÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25320,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUADUAS"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25322,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUASCA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25324,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUATAQUÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25326,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUATAVITA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25328,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUAYABAL DE SÍQUIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25335,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUAYABETAL"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25339,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "GUTIÉRREZ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25368,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "JERUSALÉN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25372,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "JUNÍN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25377,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LA CALERA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25386,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LA MESA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25394,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LA PALMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25398,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LA PEÑA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25402,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LA VEGA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25407,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "LENGUAZAQUE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25426,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "MACHETÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25430,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "MADRID"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25436,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "MANTA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25438,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "MEDINA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25473,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "MOSQUERA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25483,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "NARIÑO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25486,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "NEMOCÓN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25488,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "NILO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25489,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "NIMAIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25491,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "NOCAIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25506,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VENECIA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25513,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PACHO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25518,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PAIME"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25524,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PANDI"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25530,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PARATEBUENO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25535,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PASCA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25572,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PUERTO SALGAR"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25580,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "PULÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25592,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "QUEBRADANEGRA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25594,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "QUETAME"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25596,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "QUIPILE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25599,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "APULO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25612,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "RICAURTE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25645,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SAN ANTONIO DEL TEQUENDAMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25649,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SAN BERNARDO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25653,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SAN CAYETANO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25658,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SAN FRANCISCO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25662,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SAN JUAN DE RIOSECO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25718,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SASAIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25736,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SESQUILÉ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25740,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SIBATÉ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25743,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SILVANIA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25745,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SIMIJACA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25754,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SOACHA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25758,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SOPÓ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25769,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SUBACHOQUE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25772,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SUESCA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25777,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SUPATÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25779,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SUSA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25781,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "SUTATAUSA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25785,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TABIO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25793,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TAUSA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25797,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TENA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25799,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TENJO"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25805,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TIBACUY"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25807,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TIBIRITA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25815,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TOCAIMA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25817,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TOCANCIPÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25823,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "TOPAIPÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25839,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "UBALÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25841,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "UBAQUE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25843,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VILLA DE SAN DIEGO DE UBATÉ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25845,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "UNE"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25851,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ÚTICA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25862,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VERGARA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25867,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VIANÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25871,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VILLAGÓMEZ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25873,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VILLAPINZÓN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25875,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VILLETA"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25878,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "VIOTÁ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25885,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "YACOPÍ"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25898,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ZIPACÓN"
    },
    {
      "CodDepartamento": 25,
      "CodMunicipio": 25899,
      "NomDepartamento": "CUNDINAMARCA",
      "NomMunicipio": "ZIPAQUIRÁ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27001,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "QUIBDÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27006,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "ACANDÍ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27025,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "ALTO BAUDÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27050,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "ATRATO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27073,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "BAGADÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27075,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "BAHÍA SOLANO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27077,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "BAJO BAUDÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27099,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "BOJAYÁ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27135,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "EL CANTÓN DEL SAN PABLO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27150,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "CARMEN DEL DARIÉN"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27160,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "CÉRTEGUI"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27205,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "CONDOTO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27245,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "EL CARMEN DE ATRATO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27250,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "EL LITORAL DEL SAN JUAN"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27361,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "ISTMINA"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27372,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "JURADÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27413,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "LLORÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27425,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "MEDIO ATRATO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27430,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "MEDIO BAUDÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27450,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "MEDIO SAN JUAN"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27491,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "NÓVITA"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27495,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "NUQUÍ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27580,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "RÍO IRÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27600,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "RÍO QUITO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27615,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "RIOSUCIO"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27660,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "SAN JOSÉ DEL PALMAR"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27745,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "SIPÍ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27787,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "TADÓ"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27800,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "UNGUÍA"
    },
    {
      "CodDepartamento": 27,
      "CodMunicipio": 27810,
      "NomDepartamento": "CHOCÓ",
      "NomMunicipio": "UNIÓN PANAMERICANA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41001,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "NEIVA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41006,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ACEVEDO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41013,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "AGRADO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41016,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "AIPE"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41020,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ALGECIRAS"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41026,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ALTAMIRA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41078,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "BARAYA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41132,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "CAMPOALEGRE"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41206,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "COLOMBIA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41244,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ELÍAS"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41298,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "GARZÓN"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41306,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "GIGANTE"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41319,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "GUADALUPE"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41349,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "HOBO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41357,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ÍQUIRA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41359,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "ISNOS"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41378,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "LA ARGENTINA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41396,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "LA PLATA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41483,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "NÁTAGA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41503,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "OPORAPA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41518,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "PAICOL"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41524,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "PALERMO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41530,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "PALESTINA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41548,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "PITAL"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41551,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "PITALITO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41615,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "RIVERA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41660,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "SALADOBLANCO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41668,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "SAN AGUSTÍN"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41676,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "SANTA MARÍA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41770,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "SUAZA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41791,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "TARQUI"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41797,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "TESALIA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41799,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "TELLO"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41801,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "TERUEL"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41807,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "TIMANÁ"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41872,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "VILLAVIEJA"
    },
    {
      "CodDepartamento": 41,
      "CodMunicipio": 41885,
      "NomDepartamento": "HUILA",
      "NomMunicipio": "YAGUARÁ"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44001,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "RIOHACHA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44035,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "ALBANIA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44078,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "BARRANCAS"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44090,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "DIBULLA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44098,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "DISTRACCIÓN"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44110,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "EL MOLINO"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44279,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "FONSECA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44378,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "HATONUEVO"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44420,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "LA JAGUA DEL PILAR"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44430,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "MAICAO"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44560,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "MANAURE"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44650,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "SAN JUAN DEL CESAR"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44847,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "URIBIA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44855,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "URUMITA"
    },
    {
      "CodDepartamento": 44,
      "CodMunicipio": 44874,
      "NomDepartamento": "LA GUAJIRA",
      "NomMunicipio": "VILLANUEVA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47001,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SANTA MARTA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47030,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "ALGARROBO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47053,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "ARACATACA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47058,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "ARIGUANÍ"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47161,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "CERRO DE SAN ANTONIO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47170,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "CHIVOLO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47189,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "CIÉNAGA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47205,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "CONCORDIA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47245,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "EL BANCO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47258,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "EL PIÑÓN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47268,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "EL RETÉN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47288,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "FUNDACIÓN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47318,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "GUAMAL"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47460,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "NUEVA GRANADA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47541,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "PEDRAZA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47545,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "PIJIÑO DEL CARMEN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47551,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "PIVIJAY"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47555,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "PLATO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47570,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "PUEBLOVIEJO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47605,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "REMOLINO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47660,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SABANAS DE SAN ÁNGEL"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47675,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SALAMINA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47692,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SAN SEBASTIÁN DE BUENAVISTA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47703,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SAN ZENÓN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47707,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SANTA ANA"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47720,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SANTA BÁRBARA DE PINTO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47745,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "SITIONUEVO"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47798,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "TENERIFE"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47960,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "ZAPAYÁN"
    },
    {
      "CodDepartamento": 47,
      "CodMunicipio": 47980,
      "NomDepartamento": "MAGDALENA",
      "NomMunicipio": "ZONA BANANERA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50001,
      "NomDepartamento": "META",
      "NomMunicipio": "VILLAVICENCIO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50006,
      "NomDepartamento": "META",
      "NomMunicipio": "ACACÍAS"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50110,
      "NomDepartamento": "META",
      "NomMunicipio": "BARRANCA DE UPÍA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50124,
      "NomDepartamento": "META",
      "NomMunicipio": "CABUYARO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50150,
      "NomDepartamento": "META",
      "NomMunicipio": "CASTILLA LA NUEVA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50223,
      "NomDepartamento": "META",
      "NomMunicipio": "CUBARRAL"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50226,
      "NomDepartamento": "META",
      "NomMunicipio": "CUMARAL"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50245,
      "NomDepartamento": "META",
      "NomMunicipio": "EL CALVARIO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50251,
      "NomDepartamento": "META",
      "NomMunicipio": "EL CASTILLO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50270,
      "NomDepartamento": "META",
      "NomMunicipio": "EL DORADO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50287,
      "NomDepartamento": "META",
      "NomMunicipio": "FUENTE DE ORO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50313,
      "NomDepartamento": "META",
      "NomMunicipio": "GRANADA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50318,
      "NomDepartamento": "META",
      "NomMunicipio": "GUAMAL"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50325,
      "NomDepartamento": "META",
      "NomMunicipio": "MAPIRIPÁN"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50330,
      "NomDepartamento": "META",
      "NomMunicipio": "MESETAS"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50350,
      "NomDepartamento": "META",
      "NomMunicipio": "LA MACARENA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50370,
      "NomDepartamento": "META",
      "NomMunicipio": "URIBE"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50400,
      "NomDepartamento": "META",
      "NomMunicipio": "LEJANÍAS"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50450,
      "NomDepartamento": "META",
      "NomMunicipio": "PUERTO CONCORDIA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50568,
      "NomDepartamento": "META",
      "NomMunicipio": "PUERTO GAITÁN"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50573,
      "NomDepartamento": "META",
      "NomMunicipio": "PUERTO LÓPEZ"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50577,
      "NomDepartamento": "META",
      "NomMunicipio": "PUERTO LLERAS"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50590,
      "NomDepartamento": "META",
      "NomMunicipio": "PUERTO RICO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50606,
      "NomDepartamento": "META",
      "NomMunicipio": "RESTREPO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50680,
      "NomDepartamento": "META",
      "NomMunicipio": "SAN CARLOS DE GUAROA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50683,
      "NomDepartamento": "META",
      "NomMunicipio": "SAN JUAN DE ARAMA"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50686,
      "NomDepartamento": "META",
      "NomMunicipio": "SAN JUANITO"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50689,
      "NomDepartamento": "META",
      "NomMunicipio": "SAN MARTÍN"
    },
    {
      "CodDepartamento": 50,
      "CodMunicipio": 50711,
      "NomDepartamento": "META",
      "NomMunicipio": "VISTAHERMOSA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52001,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "PASTO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52019,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ALBÁN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52022,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ALDANA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52036,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ANCUYA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52051,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ARBOLEDA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52079,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "BARBACOAS"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52083,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "BELÉN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52110,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "BUESACO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52203,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "COLÓN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52207,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CONSACÁ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52210,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CONTADERO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52215,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CÓRDOBA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52224,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CUASPUD CARLOSAMA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52227,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CUMBAL"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52233,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CUMBITARA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52240,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "CHACHAGÜÍ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52250,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "EL CHARCO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52254,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "EL PEÑOL"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52256,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "EL ROSARIO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52258,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "EL TABLÓN DE GÓMEZ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52260,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "EL TAMBO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52287,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "FUNES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52317,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "GUACHUCAL"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52320,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "GUAITARILLA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52323,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "GUALMATÁN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52352,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ILES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52354,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "IMUÉS"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52356,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "IPIALES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52378,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LA CRUZ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52381,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LA FLORIDA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52385,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LA LLANADA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52390,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LA TOLA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52399,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LA UNIÓN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52405,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LEIVA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52411,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LINARES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52418,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "LOS ANDES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52427,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "MAGÜÍ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52435,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "MALLAMA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52473,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "MOSQUERA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52480,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "NARIÑO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52490,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "OLAYA HERRERA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52506,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "OSPINA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52520,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "FRANCISCO PIZARRO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52540,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "POLICARPA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52560,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "POTOSÍ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52565,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "PROVIDENCIA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52573,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "PUERRES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52585,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "PUPIALES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52612,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "RICAURTE"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52621,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "ROBERTO PAYÁN"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52678,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAMANIEGO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52683,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SANDONÁ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52685,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAN BERNARDO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52687,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAN LORENZO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52693,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAN PABLO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52694,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAN PEDRO DE CARTAGO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52696,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SANTA BÁRBARA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52699,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SANTACRUZ"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52720,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAPUYES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52786,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "TAMINANGO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52788,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "TANGUA"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52835,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "SAN ANDRÉS DE TUMACO"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52838,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "TÚQUERRES"
    },
    {
      "CodDepartamento": 52,
      "CodMunicipio": 52885,
      "NomDepartamento": "NARIÑO",
      "NomMunicipio": "YACUANQUER"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54001,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SAN JOSÉ DE CÚCUTA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54003,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "ÁBREGO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54051,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "ARBOLEDAS"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54099,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "BOCHALEMA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54109,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "BUCARASICA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54125,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CÁCOTA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54128,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CÁCHIRA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54172,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CHINÁCOTA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54174,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CHITAGÁ"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54206,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CONVENCIÓN"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54223,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "CUCUTILLA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54239,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "DURANIA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54245,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "EL CARMEN"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54250,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "EL TARRA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54261,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "EL ZULIA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54313,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "GRAMALOTE"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54344,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "HACARÍ"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54347,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "HERRÁN"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54377,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "LABATECA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54385,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "LA ESPERANZA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54398,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "LA PLAYA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54405,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "LOS PATIOS"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54418,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "LOURDES"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54480,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "MUTISCUA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54498,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "OCAÑA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54518,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "PAMPLONA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54520,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "PAMPLONITA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54553,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "PUERTO SANTANDER"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54599,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "RAGONVALIA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54660,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SALAZAR"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54670,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SAN CALIXTO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54673,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SAN CAYETANO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54680,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SANTIAGO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54720,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SARDINATA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54743,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "SILOS"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54800,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "TEORAMA"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54810,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "TIBÚ"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54820,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "TOLEDO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54871,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "VILLA CARO"
    },
    {
      "CodDepartamento": 54,
      "CodMunicipio": 54874,
      "NomDepartamento": "NORTE DE SANTANDER",
      "NomMunicipio": "VILLA DEL ROSARIO"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63001,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "ARMENIA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63111,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "BUENAVISTA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63130,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "CALARCÁ"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63190,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "CIRCASIA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63212,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "CÓRDOBA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63272,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "FILANDIA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63302,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "GÉNOVA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63401,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "LA TEBAIDA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63470,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "MONTENEGRO"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63548,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "PIJAO"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63594,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "QUIMBAYA"
    },
    {
      "CodDepartamento": 63,
      "CodMunicipio": 63690,
      "NomDepartamento": "QUINDÍO",
      "NomMunicipio": "SALENTO"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66001,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "PEREIRA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66045,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "APÍA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66075,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "BALBOA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66088,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "BELÉN DE UMBRÍA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66170,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "DOSQUEBRADAS"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66318,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "GUÁTICA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66383,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "LA CELIA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66400,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "LA VIRGINIA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66440,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "MARSELLA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66456,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "MISTRATÓ"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66572,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "PUEBLO RICO"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66594,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "QUINCHÍA"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66682,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "SANTA ROSA DE CABAL"
    },
    {
      "CodDepartamento": 66,
      "CodMunicipio": 66687,
      "NomDepartamento": "RISARALDA",
      "NomMunicipio": "SANTUARIO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68001,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BUCARAMANGA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68013,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "AGUADA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68020,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ALBANIA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68051,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ARATOCA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68077,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BARBOSA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68079,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BARICHARA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68081,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BARRANCABERMEJA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68092,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BETULIA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68101,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "BOLÍVAR"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68121,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CABRERA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68132,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CALIFORNIA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68147,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CAPITANEJO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68152,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CARCASÍ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68160,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CEPITÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68162,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CERRITO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68167,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CHARALÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68169,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CHARTA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68176,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CHIMA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68179,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CHIPATÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68190,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CIMITARRA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68207,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CONCEPCIÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68209,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CONFINES"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68211,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CONTRATACIÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68217,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "COROMORO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68229,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "CURITÍ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68235,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "EL CARMEN DE CHUCURI"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68245,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "EL GUACAMAYO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68250,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "EL PEÑÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68255,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "EL PLAYÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68264,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ENCINO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68266,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ENCISO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68271,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "FLORIÁN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68276,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "FLORIDABLANCA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68296,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GALÁN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68298,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GÁMBITA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68307,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GIRÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68318,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GUACA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68320,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GUADALUPE"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68322,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GUAPOTÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68324,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GUAVATÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68327,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "GÜEPSA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68344,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "HATO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68368,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "JESÚS MARÍA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68370,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "JORDÁN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68377,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "LA BELLEZA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68385,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "LANDÁZURI"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68397,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "LA PAZ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68406,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "LEBRIJA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68418,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "LOS SANTOS"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68425,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "MACARAVITA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68432,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "MÁLAGA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68444,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "MATANZA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68464,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "MOGOTES"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68468,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "MOLAGAVITA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68498,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "OCAMONTE"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68500,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "OIBA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68502,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ONZAGA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68522,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PALMAR"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68524,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PALMAS DEL SOCORRO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68533,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PÁRAMO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68547,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PIEDECUESTA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68549,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PINCHOTE"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68572,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PUENTE NACIONAL"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68573,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PUERTO PARRA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68575,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "PUERTO WILCHES"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68615,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "RIONEGRO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68655,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SABANA DE TORRES"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68669,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN ANDRÉS"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68673,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN BENITO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68679,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN GIL"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68682,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN JOAQUÍN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68684,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN JOSÉ DE MIRANDA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68686,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN MIGUEL"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68689,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SAN VICENTE DE CHUCURÍ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68705,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SANTA BÁRBARA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68720,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SANTA HELENA DEL OPÓN"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68745,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SIMACOTA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68755,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SOCORRO"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68770,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SUAITA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68773,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SUCRE"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68780,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "SURATÁ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68820,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "TONA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68855,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "VALLE DE SAN JOSÉ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68861,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "VÉLEZ"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68867,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "VETAS"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68872,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "VILLANUEVA"
    },
    {
      "CodDepartamento": 68,
      "CodMunicipio": 68895,
      "NomDepartamento": "SANTANDER",
      "NomMunicipio": "ZAPATOCA"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70001,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SINCELEJO"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70110,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "BUENAVISTA"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70124,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "CAIMITO"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70204,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "COLOSÓ"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70215,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "COROZAL"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70221,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "COVEÑAS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70230,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "CHALÁN"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70233,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "EL ROBLE"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70235,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "GALERAS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70265,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "GUARANDA"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70400,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "LA UNIÓN"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70418,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "LOS PALMITOS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70429,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "MAJAGUAL"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70473,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "MORROA"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70508,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "OVEJAS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70523,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "PALMITO"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70670,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAMPUÉS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70678,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN BENITO ABAD"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70702,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN JUAN DE BETULIA"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70708,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN MARCOS"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70713,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN ONOFRE"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70717,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN PEDRO"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70742,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN LUIS DE SINCÉ"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70771,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SUCRE"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70820,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SANTIAGO DE TOLÚ"
    },
    {
      "CodDepartamento": 70,
      "CodMunicipio": 70823,
      "NomDepartamento": "SUCRE",
      "NomMunicipio": "SAN JOSÉ DE TOLUVIEJO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73001,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "IBAGUÉ"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73024,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ALPUJARRA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73026,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ALVARADO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73030,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "AMBALEMA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73043,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ANZOÁTEGUI"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73055,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ARMERO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73067,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ATACO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73124,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "CAJAMARCA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73148,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "CARMEN DE APICALÁ"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73152,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "CASABIANCA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73168,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "CHAPARRAL"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73200,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "COELLO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73217,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "COYAIMA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73226,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "CUNDAY"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73236,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "DOLORES"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73268,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ESPINAL"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73270,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "FALAN"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73275,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "FLANDES"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73283,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "FRESNO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73319,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "GUAMO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73347,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "HERVEO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73349,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "HONDA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73352,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ICONONZO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73408,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "LÉRIDA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73411,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "LÍBANO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73443,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SAN SEBASTIÁN DE MARIQUITA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73449,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "MELGAR"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73461,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "MURILLO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73483,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "NATAGAIMA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73504,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ORTEGA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73520,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "PALOCABILDO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73547,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "PIEDRAS"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73555,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "PLANADAS"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73563,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "PRADO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73585,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "PURIFICACIÓN"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73616,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "RIOBLANCO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73622,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "RONCESVALLES"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73624,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "ROVIRA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73671,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SALDAÑA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73675,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SAN ANTONIO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73678,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SAN LUIS"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73686,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SANTA ISABEL"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73770,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "SUÁREZ"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73854,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "VALLE DE SAN JUAN"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73861,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "VENADILLO"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73870,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "VILLAHERMOSA"
    },
    {
      "CodDepartamento": 73,
      "CodMunicipio": 73873,
      "NomDepartamento": "TOLIMA",
      "NomMunicipio": "VILLARRICA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76001,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "CALI"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76020,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ALCALÁ"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76036,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ANDALUCÍA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76041,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ANSERMANUEVO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76054,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ARGELIA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76100,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "BOLÍVAR"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76109,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "BUENAVENTURA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76111,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "GUADALAJARA DE BUGA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76113,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "BUGALAGRANDE"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76122,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "CAICEDONIA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76126,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "CALIMA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76130,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "CANDELARIA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76147,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "CARTAGO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76233,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "DAGUA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76243,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "EL ÁGUILA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76246,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "EL CAIRO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76248,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "EL CERRITO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76250,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "EL DOVIO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76275,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "FLORIDA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76306,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "GINEBRA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76318,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "GUACARÍ"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76364,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "JAMUNDÍ"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76377,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "LA CUMBRE"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76400,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "LA UNIÓN"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76403,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "LA VICTORIA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76497,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "OBANDO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76520,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "PALMIRA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76563,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "PRADERA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76606,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "RESTREPO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76616,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "RIOFRÍO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76622,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ROLDANILLO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76670,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "SAN PEDRO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76736,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "SEVILLA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76823,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "TORO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76828,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "TRUJILLO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76834,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "TULUÁ"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76845,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ULLOA"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76863,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "VERSALLES"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76869,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "VIJES"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76890,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "YOTOCO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76892,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "YUMBO"
    },
    {
      "CodDepartamento": 76,
      "CodMunicipio": 76895,
      "NomDepartamento": "VALLE DEL CAUCA",
      "NomMunicipio": "ZARZAL"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81001,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "ARAUCA"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81065,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "ARAUQUITA"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81220,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "CRAVO NORTE"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81300,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "FORTUL"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81591,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "PUERTO RONDÓN"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81736,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "SARAVENA"
    },
    {
      "CodDepartamento": 81,
      "CodMunicipio": 81794,
      "NomDepartamento": "ARAUCA",
      "NomMunicipio": "TAME"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85001,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "YOPAL"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85010,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "AGUAZUL"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85015,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "CHÁMEZA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85125,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "HATO COROZAL"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85136,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "LA SALINA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85139,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "MANÍ"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85162,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "MONTERREY"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85225,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "NUNCHÍA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85230,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "OROCUÉ"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85250,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "PAZ DE ARIPORO"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85263,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "PORE"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85279,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "RECETOR"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85300,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "SABANALARGA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85315,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "SÁCAMA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85325,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "SAN LUIS DE PALENQUE"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85400,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "TÁMARA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85410,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "TAURAMENA"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85430,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "TRINIDAD"
    },
    {
      "CodDepartamento": 85,
      "CodMunicipio": 85440,
      "NomDepartamento": "CASANARE",
      "NomMunicipio": "VILLANUEVA"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86001,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "MOCOA"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86219,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "COLÓN"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86320,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "ORITO"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86568,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "PUERTO ASÍS"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86569,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "PUERTO CAICEDO"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86571,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "PUERTO GUZMÁN"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86573,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "PUERTO LEGUÍZAMO"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86749,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "SIBUNDOY"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86755,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "SAN FRANCISCO"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86757,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "SAN MIGUEL"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86760,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "SANTIAGO"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86865,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "VALLE DEL GUAMUEZ"
    },
    {
      "CodDepartamento": 86,
      "CodMunicipio": 86885,
      "NomDepartamento": "PUTUMAYO",
      "NomMunicipio": "VILLAGARZÓN"
    },
    {
      "CodDepartamento": 88,
      "CodMunicipio": 88001,
      "NomDepartamento": "ARCHIPIÉLAGO DE SAN ANDRÉS. PROVIDENCIA Y SANTA CATALINA",
      "NomMunicipio": "SAN ANDRÉS"
    },
    {
      "CodDepartamento": 88,
      "CodMunicipio": 88564,
      "NomDepartamento": "ARCHIPIÉLAGO DE SAN ANDRÉS. PROVIDENCIA Y SANTA CATALINA",
      "NomMunicipio": "PROVIDENCIA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91001,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "LETICIA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91263,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "EL ENCANTO"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91405,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "LA CHORRERA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91407,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "LA PEDRERA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91430,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "LA VICTORIA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91460,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "MIRITÍ - PARANÁ"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91530,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "PUERTO ALEGRÍA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91536,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "PUERTO ARICA"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91540,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "PUERTO NARIÑO"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91669,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "PUERTO SANTANDER"
    },
    {
      "CodDepartamento": 91,
      "CodMunicipio": 91798,
      "NomDepartamento": "AMAZONAS",
      "NomMunicipio": "TARAPACÁ"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94001,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "INÍRIDA"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94343,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "BARRANCOMINAS"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94883,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "SAN FELIPE"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94884,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "PUERTO COLOMBIA"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94885,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "LA GUADALUPE"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94886,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "CACAHUAL"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94887,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "PANA PANA"
    },
    {
      "CodDepartamento": 94,
      "CodMunicipio": 94888,
      "NomDepartamento": "GUAINÍA",
      "NomMunicipio": "MORICHAL"
    },
    {
      "CodDepartamento": 95,
      "CodMunicipio": 95001,
      "NomDepartamento": "GUAVIARE",
      "NomMunicipio": "SAN JOSÉ DEL GUAVIARE"
    },
    {
      "CodDepartamento": 95,
      "CodMunicipio": 95015,
      "NomDepartamento": "GUAVIARE",
      "NomMunicipio": "CALAMAR"
    },
    {
      "CodDepartamento": 95,
      "CodMunicipio": 95025,
      "NomDepartamento": "GUAVIARE",
      "NomMunicipio": "EL RETORNO"
    },
    {
      "CodDepartamento": 95,
      "CodMunicipio": 95200,
      "NomDepartamento": "GUAVIARE",
      "NomMunicipio": "MIRAFLORES"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97001,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "MITÚ"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97161,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "CARURÚ"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97511,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "PACOA"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97666,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "TARAIRA"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97777,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "PAPUNAHUA"
    },
    {
      "CodDepartamento": 97,
      "CodMunicipio": 97889,
      "NomDepartamento": "VAUPÉS",
      "NomMunicipio": "YAVARATÉ"
    },
    {
      "CodDepartamento": 99,
      "CodMunicipio": 99001,
      "NomDepartamento": "VICHADA",
      "NomMunicipio": "PUERTO CARREÑO"
    },
    {
      "CodDepartamento": 99,
      "CodMunicipio": 99524,
      "NomDepartamento": "VICHADA",
      "NomMunicipio": "LA PRIMAVERA"
    },
    {
      "CodDepartamento": 99,
      "CodMunicipio": 99624,
      "NomDepartamento": "VICHADA",
      "NomMunicipio": "SANTA ROSALÍA"
    },
    {
      "CodDepartamento": 99,
      "CodMunicipio": 99773,
      "NomDepartamento": "VICHADA",
      "NomMunicipio": "CUMARIBO"
    }
  ];

  private async seedData(queryRunner: QueryRunner) {
    for (const data of this.divipolaData) {
      await queryRunner.query(
        `INSERT INTO "divipola" ("department_code", "municipality_code", "department_name", "municipality_name") VALUES ($1, $2, $3, $4)`,
        [data.CodDepartamento, data.CodMunicipio, data.NomDepartamento, data.NomMunicipio],
      );
    }
  }

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "divipola" ("id" SERIAL NOT NULL, "department_code" character varying(2) NOT NULL, "municipality_code" character varying(5) NOT NULL, "department_name" character varying(100) NOT NULL, "municipality_name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d31753678fc28aac1189d9e8051" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_6b866faabbb0e61157cf7054d4" ON "divipola" ("department_code", "municipality_code") `);

    await this.seedData(queryRunner);
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_6b866faabbb0e61157cf7054d4"`);
    await queryRunner.query(`DROP TABLE "divipola"`);
  }
  
}
