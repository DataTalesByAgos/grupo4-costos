import type { DatosProyecto } from "./types"

// Datos iniciales para la aplicación
export const datosIniciales: DatosProyecto = {
  tipologias: [
    {
      id: "A",
      nombre: "Tipología A",
      descripcion:
        "Vivienda individual resuelta en Dúplex, implantada en un lote urbano convencional. Consta de Estar, Comedor, Lavadero, Toilet y Cochera abierta (PB) y 2 Dormitorios, Baño y Vestidor (PA). Cocina integrada al estar, con una superficie total de 85m².",
      precioM2: 1849008.1,
      variacion: 2.01,
      rubros: [
        {
          id: 1,
          nombre: "TRABAJOS PRELIMINARES",
          importes: {
            A: {
              materiales: 328185.8,
              ejecucion: 7999582.45,
              total: 8327768.25,
              incidencia: 8.67,
            },
          },
        },
        {
          id: 2,
          nombre: "MOVIMIENTO DE TIERRA",
          importes: {
            A: {
              materiales: 0,
              ejecucion: 585146.62,
              total: 585146.62,
              incidencia: 0.61,
            },
          },
        },
        {
          id: 3,
          nombre: "ESTRUCTURAS",
          importes: {
            A: {
              materiales: 2758082.77,
              ejecucion: 2470658.99,
              total: 5228741.76,
              incidencia: 5.45,
            },
          },
        },
        {
          id: 4,
          nombre: "MAMPOSTERÍAS",
          importes: {
            A: {
              materiales: 5171075.75,
              ejecucion: 5524565.65,
              total: 10695641.4,
              incidencia: 11.14,
            },
          },
        },
        {
          id: 5,
          nombre: "CAPAS AISLADORAS",
          importes: {
            A: {
              materiales: 751356.37,
              ejecucion: 1030589.18,
              total: 1781945.55,
              incidencia: 1.86,
            },
          },
        },
        {
          id: 6,
          nombre: "CUBIERTAS",
          importes: {
            A: {
              materiales: 3799486.56,
              ejecucion: 1385507.59,
              total: 5184994.15,
              incidencia: 5.4,
            },
          },
        },
        {
          id: 7,
          nombre: "REVOQUES",
          importes: {
            A: {
              materiales: 1602088.76,
              ejecucion: 5517605.82,
              total: 7119694.58,
              incidencia: 7.42,
            },
          },
        },
        {
          id: 8,
          nombre: "CONTRAPISOS",
          importes: {
            A: {
              materiales: 516573.63,
              ejecucion: 923415.09,
              total: 1439988.72,
              incidencia: 1.5,
            },
          },
        },
        {
          id: 9,
          nombre: "CIELORRASOS",
          importes: {
            A: {
              materiales: 735445.59,
              ejecucion: 1632104.09,
              total: 2367549.68,
              incidencia: 2.46,
            },
          },
        },
        {
          id: 10,
          nombre: "REVESTIMIENTOS",
          importes: {
            A: {
              materiales: 4047315.51,
              ejecucion: 865430.97,
              total: 4912746.48,
              incidencia: 5.11,
            },
          },
        },
        {
          id: 11,
          nombre: "PISOS",
          importes: {
            A: {
              materiales: 1629416.13,
              ejecucion: 1126103.84,
              total: 2755519.97,
              incidencia: 2.86,
            },
          },
        },
        {
          id: 12,
          nombre: "ZÓCALOS",
          importes: {
            A: {
              materiales: 797431.61,
              ejecucion: 127456.87,
              total: 924888.48,
              incidencia: 0.96,
            },
          },
        },
        {
          id: 13,
          nombre: "CARPINTERÍAS",
          importes: {
            A: {
              materiales: 15813592.61,
              ejecucion: 1180296.87,
              total: 16993889.48,
              incidencia: 17.69,
            },
          },
        },
        {
          id: 14,
          nombre: "VIDRIOS",
          importes: {
            A: {
              materiales: 407321.54,
              ejecucion: 116326.94,
              total: 523648.48,
              incidencia: 0.55,
            },
          },
        },
        {
          id: 15,
          nombre: "PINTURAS",
          importes: {
            A: {
              materiales: 5815372.66,
              ejecucion: 3224401.09,
              total: 9039773.75,
              incidencia: 9.37,
            },
          },
        },
        {
          id: 16,
          nombre: "INSTALACIONES ELÉCTRICAS",
          importes: {
            A: {
              materiales: 1335391.11,
              ejecucion: 2210106.42,
              total: 3545497.53,
              incidencia: 3.69,
            },
          },
        },
        {
          id: 17,
          nombre: "INSTALACIONES SANITARIAS",
          importes: {
            A: {
              materiales: 5570191.77,
              ejecucion: 1542500.34,
              total: 7112692.11,
              incidencia: 7.51,
            },
          },
        },
        {
          id: 18,
          nombre: "INSTALACIONES DE GAS",
          importes: {
            A: {
              materiales: 440140.74,
              ejecucion: 701237.22,
              total: 1141377.96,
              incidencia: 1.19,
            },
          },
        },
        {
          id: 19,
          nombre: "EQUIPAMIENTO",
          importes: {
            A: {
              materiales: 0,
              ejecucion: 0,
              total: 0,
              incidencia: 0,
            },
          },
        },
        {
          id: 20,
          nombre: "VARIOS",
          importes: {
            A: {
              materiales: 1295361.97,
              ejecucion: 925830.04,
              total: 2121192.01,
              incidencia: 2.31,
            },
          },
        },
      ],
      totales: {
        costoDirectoTotal: 92403945.78,
        costoDirectoM2: 1086987.6,
        incidenciaMateriales: 54.55,
        incidenciaEjecucion: 45.45,
        gastosGenerales: 24013662.2,
        beneficiosEmpresariales: 14407824.32,
        subtotalSinImpuesto: 134473216.31,
        iva: 28239375.43,
        precioFinalTotal: 162712591.74,
        precioFinalM2: 1914265.78,
      },
    },
    {
      id: "B",
      nombre: "Tipología B",
      descripcion:
        "Vivienda individual resuelta en PB, implantada en un lote urbano convencional. Consta de 2 Dormitorios, Baño, Estar, Comedor, Cocina, Lavadero y Cochera abierta. Cubierta de Tejas y sector terraza plana, con una superficie total de 85m².",
      precioM2: 1862938.73,
      variacion: 2.22,
      rubros: [
        {
          id: 1,
          nombre: "TRABAJOS PRELIMINARES",
          importes: {
            B: {
              materiales: 328185.6,
              ejecucion: 7764091.59,
              total: 8092277.19,
              incidencia: 8.66,
            },
          },
        },
        {
          id: 2,
          nombre: "MOVIMIENTO DE TIERRA",
          importes: {
            B: {
              materiales: 0,
              ejecucion: 1229365.8,
              total: 1229365.8,
              incidencia: 1.32,
            },
          },
        },
        {
          id: 3,
          nombre: "ESTRUCTURAS",
          importes: {
            B: {
              materiales: 2728845.25,
              ejecucion: 1518624.15,
              total: 4247469.4,
              incidencia: 2.54,
            },
          },
        },
        {
          id: 4,
          nombre: "MAMPOSTERÍAS",
          importes: {
            B: {
              materiales: 7893284.06,
              ejecucion: 5775877.34,
              total: 13669161.4,
              incidencia: 14.61,
            },
          },
        },
        {
          id: 5,
          nombre: "CAPAS AISLADORAS",
          importes: {
            B: {
              materiales: 1258351.34,
              ejecucion: 1616022.21,
              total: 2874373.55,
              incidencia: 3.07,
            },
          },
        },
        {
          id: 6,
          nombre: "CUBIERTAS",
          importes: {
            B: {
              materiales: 8271882.84,
              ejecucion: 2402434.66,
              total: 10674317.51,
              incidencia: 11.42,
            },
          },
        },
        {
          id: 7,
          nombre: "REVOQUES",
          importes: {
            B: {
              materiales: 943780.76,
              ejecucion: 5897376.82,
              total: 6841157.58,
              incidencia: 7.32,
            },
          },
        },
        {
          id: 8,
          nombre: "CONTRAPISOS",
          importes: {
            B: {
              materiales: 725901.61,
              ejecucion: 1153548.45,
              total: 1879450.1,
              incidencia: 2.01,
            },
          },
        },
        {
          id: 9,
          nombre: "CIELORRASOS",
          importes: {
            B: {
              materiales: 175467.58,
              ejecucion: 452475.29,
              total: 627942.87,
              incidencia: 0.67,
            },
          },
        },
        {
          id: 10,
          nombre: "REVESTIMIENTOS",
          importes: {
            B: {
              materiales: 3611945.53,
              ejecucion: 723692.81,
              total: 4335638.33,
              incidencia: 4.64,
            },
          },
        },
        {
          id: 11,
          nombre: "PISOS",
          importes: {
            B: {
              materiales: 4124146.46,
              ejecucion: 340540.46,
              total: 4464686.92,
              incidencia: 4.78,
            },
          },
        },
        {
          id: 12,
          nombre: "ZÓCALOS",
          importes: {
            B: {
              materiales: 1132434.65,
              ejecucion: 138358.54,
              total: 1270793.19,
              incidencia: 1.36,
            },
          },
        },
        {
          id: 13,
          nombre: "CARPINTERÍAS",
          importes: {
            B: {
              materiales: 11899437.59,
              ejecucion: 1310656.54,
              total: 13210094.13,
              incidencia: 14.13,
            },
          },
        },
        {
          id: 14,
          nombre: "VIDRIOS",
          importes: {
            B: {
              materiales: 457580.05,
              ejecucion: 182438.66,
              total: 640018.71,
              incidencia: 0.69,
            },
          },
        },
        {
          id: 15,
          nombre: "PINTURAS",
          importes: {
            B: {
              materiales: 3349507.34,
              ejecucion: 3824462.55,
              total: 7173969.89,
              incidencia: 7.67,
            },
          },
        },
        {
          id: 16,
          nombre: "INSTALACIONES ELÉCTRICAS",
          importes: {
            B: {
              materiales: 1442357.21,
              ejecucion: 2340967.12,
              total: 3783324.33,
              incidencia: 4.05,
            },
          },
        },
        {
          id: 17,
          nombre: "INSTALACIONES SANITARIAS",
          importes: {
            B: {
              materiales: 5088730.57,
              ejecucion: 1494821.17,
              total: 6583551.74,
              incidencia: 7.04,
            },
          },
        },
        {
          id: 18,
          nombre: "INSTALACIONES DE GAS",
          importes: {
            B: {
              materiales: 755207.95,
              ejecucion: 360540.91,
              total: 1115748.86,
              incidencia: 1.19,
            },
          },
        },
        {
          id: 19,
          nombre: "EQUIPAMIENTO",
          importes: {
            B: {
              materiales: 0,
              ejecucion: 0,
              total: 0,
              incidencia: 0,
            },
          },
        },
        {
          id: 20,
          nombre: "VARIOS",
          importes: {
            B: {
              materiales: 2118386.48,
              ejecucion: 1896085.87,
              total: 4014472.35,
              incidencia: 4.3,
            },
          },
        },
      ],
      totales: {
        costoDirectoTotal: 93476854.61,
        costoDirectoM2: 1099727.7,
        incidenciaMateriales: 55.72,
        incidenciaEjecucion: 44.28,
        gastosGenerales: 23369213.65,
        beneficiosEmpresariales: 14021528.19,
        subtotalSinImpuesto: 130867596.45,
        iva: 27482195.25,
        precioFinalTotal: 158349791.71,
        precioFinalM2: 1862938.73,
      },
    },
    {
      id: "C",
      nombre: "Tipología C",
      descripcion:
        "Edificio en Altura para Viviendas Colectivas, implantado en un lote urbano con servicios. Consta de PB (Ingreso, Locales Servicios y Cocheras), PA (10 Pisos 2 dptos. 2D c/u dependencias por piso) y Azotea (accesible, con tanque de reserva), con una superficie total de 2500m².",
      precioM2: 1684393.91,
      variacion: 2.11,
      rubros: [
        {
          id: 1,
          nombre: "TRABAJOS PRELIMINARES",
          importes: {
            C: {
              materiales: 753244.5,
              ejecucion: 117345135.7,
              total: 118098380.2,
              incidencia: 5.26,
            },
          },
        },
        {
          id: 2,
          nombre: "MOVIMIENTO DE TIERRA",
          importes: {
            C: {
              materiales: 0,
              ejecucion: 17321682.71,
              total: 17321682.71,
              incidencia: 0.77,
            },
          },
        },
        {
          id: 3,
          nombre: "ESTRUCTURAS",
          importes: {
            C: {
              materiales: 270387265.38,
              ejecucion: 220205163.94,
              total: 490572429.32,
              incidencia: 21.83,
            },
          },
        },
        {
          id: 4,
          nombre: "MAMPOSTERÍAS",
          importes: {
            C: {
              materiales: 93807965.01,
              ejecucion: 52732538.24,
              total: 146535503.24,
              incidencia: 6.52,
            },
          },
        },
        {
          id: 5,
          nombre: "CAPAS AISLADORAS",
          importes: {
            C: {
              materiales: 9582574.45,
              ejecucion: 6374755.02,
              total: 15957329.47,
              incidencia: 0.71,
            },
          },
        },
        {
          id: 6,
          nombre: "CUBIERTAS",
          importes: {
            C: {
              materiales: 10369574.45,
              ejecucion: 6374755.02,
              total: 16744329.47,
              incidencia: 0.75,
            },
          },
        },
        {
          id: 7,
          nombre: "REVOQUES",
          importes: {
            C: {
              materiales: 13373487.59,
              ejecucion: 97568729.59,
              total: 110942217.18,
              incidencia: 4.94,
            },
          },
        },
        {
          id: 8,
          nombre: "CONTRAPISOS",
          importes: {
            C: {
              materiales: 11649470.05,
              ejecucion: 32306587.84,
              total: 43956057.88,
              incidencia: 1.96,
            },
          },
        },
        {
          id: 9,
          nombre: "CIELORRASOS",
          importes: {
            C: {
              materiales: 4330424.3,
              ejecucion: 34666578.29,
              total: 38997002.59,
              incidencia: 1.74,
            },
          },
        },
        {
          id: 10,
          nombre: "REVESTIMIENTOS",
          importes: {
            C: {
              materiales: 107181794.26,
              ejecucion: 21407731.49,
              total: 128589525.76,
              incidencia: 5.72,
            },
          },
        },
        {
          id: 11,
          nombre: "PISOS",
          importes: {
            C: {
              materiales: 55067542.15,
              ejecucion: 16653750.13,
              total: 71721292.3,
              incidencia: 3.19,
            },
          },
        },
        {
          id: 12,
          nombre: "ZÓCALOS",
          importes: {
            C: {
              materiales: 19414542.15,
              ejecucion: 5024750.13,
              total: 24439292.3,
              incidencia: 1.09,
            },
          },
        },
        {
          id: 13,
          nombre: "CARPINTERÍAS",
          importes: {
            C: {
              materiales: 245145601.92,
              ejecucion: 19351361.67,
              total: 264496963.59,
              incidencia: 11.77,
            },
          },
        },
        {
          id: 14,
          nombre: "VIDRIOS",
          importes: {
            C: {
              materiales: 12516422.32,
              ejecucion: 3457510.74,
              total: 15973933.07,
              incidencia: 0.71,
            },
          },
        },
        {
          id: 15,
          nombre: "PINTURAS",
          importes: {
            C: {
              materiales: 59277046.01,
              ejecucion: 68847132.2,
              total: 128124178.21,
              incidencia: 5.7,
            },
          },
        },
        {
          id: 16,
          nombre: "INSTALACIONES ELÉCTRICAS",
          importes: {
            C: {
              materiales: 188859073.26,
              ejecucion: 60013176.08,
              total: 248872249.34,
              incidencia: 11.08,
            },
          },
        },
        {
          id: 17,
          nombre: "INSTALACIONES SANITARIAS",
          importes: {
            C: {
              materiales: 135388557.1,
              ejecucion: 24232932.49,
              total: 159621489.59,
              incidencia: 7.1,
            },
          },
        },
        {
          id: 18,
          nombre: "INSTALACIONES DE GAS",
          importes: {
            C: {
              materiales: 10747073.26,
              ejecucion: 1024926.65,
              total: 11771999.34,
              incidencia: 0.52,
            },
          },
        },
        {
          id: 19,
          nombre: "EQUIPAMIENTO",
          importes: {
            C: {
              materiales: 23243642.65,
              ejecucion: 6450754.74,
              total: 29694397.39,
              incidencia: 1.32,
            },
          },
        },
        {
          id: 20,
          nombre: "VARIOS",
          importes: {
            C: {
              materiales: 75999243.96,
              ejecucion: 49467352.75,
              total: 125466596.7,
              incidencia: 5.58,
            },
          },
        },
      ],
      totales: {
        costoDirectoTotal: 2247133121.51,
        costoDirectoM2: 898853.25,
        incidenciaMateriales: 56.21,
        incidenciaEjecucion: 43.79,
        gastosGenerales: 561795780.38,
        beneficiosEmpresariales: 337077468.23,
        subtotalSinImpuesto: 3146006370.12,
        iva: 660661337.73,
        precioFinalTotal: 3806667707.85,
        precioFinalM2: 1522667.08,
      },
    },
    {
      id: "D",
      nombre: "Tipología D",
      descripcion:
        "Depósito/Galpón implantado en terreno ubicado en zona macroindustrial de la ciudad con servicios de agua, luz, gas, cloacas de 25x10m y un sector de sanitarios (público y oficina recepción) en dos niveles, con una superficie total de 300m² (250m² galpón + 50m² sanitarios y oficina).",
      precioM2: 971421.17,
      variacion: 2.75,
      rubros: [
        {
          id: 1,
          nombre: "TRABAJOS PRELIMINARES",
          importes: {
            D: {
              materiales: 664049.7,
              ejecucion: 10356542.38,
              total: 11020592.09,
              incidencia: 6.41,
            },
          },
        },
        {
          id: 2,
          nombre: "MOVIMIENTO DE TIERRA",
          importes: {
            D: {
              materiales: 0,
              ejecucion: 5641644.09,
              total: 5641644.09,
              incidencia: 3.28,
            },
          },
        },
        {
          id: 3,
          nombre: "ESTRUCTURAS",
          importes: {
            D: {
              materiales: 24954770.29,
              ejecucion: 12321687.05,
              total: 37276457.35,
              incidencia: 21.68,
            },
          },
        },
        {
          id: 4,
          nombre: "MAMPOSTERÍAS",
          importes: {
            D: {
              materiales: 10570678.99,
              ejecucion: 5225218.44,
              total: 15795897.43,
              incidencia: 9.19,
            },
          },
        },
        {
          id: 5,
          nombre: "CAPAS AISLADORAS",
          importes: {
            D: {
              materiales: 3524578.73,
              ejecucion: 1052057.7,
              total: 4576636.43,
              incidencia: 2.66,
            },
          },
        },
        {
          id: 6,
          nombre: "CUBIERTAS",
          importes: {
            D: {
              materiales: 11101412.73,
              ejecucion: 5092057.7,
              total: 16193470.43,
              incidencia: 9.41,
            },
          },
        },
        {
          id: 7,
          nombre: "REVOQUES",
          importes: {
            D: {
              materiales: 224400.28,
              ejecucion: 1518371.3,
              total: 1742771.59,
              incidencia: 0.74,
            },
          },
        },
        {
          id: 8,
          nombre: "CONTRAPISOS",
          importes: {
            D: {
              materiales: 7949861.03,
              ejecucion: 5510510.32,
              total: 13460371.35,
              incidencia: 7.83,
            },
          },
        },
        {
          id: 9,
          nombre: "CIELORRASOS",
          importes: {
            D: {
              materiales: 1277718.94,
              ejecucion: 611176.76,
              total: 1888895.4,
              incidencia: 1.1,
            },
          },
        },
        {
          id: 10,
          nombre: "REVESTIMIENTOS",
          importes: {
            D: {
              materiales: 533758.94,
              ejecucion: 1049796.33,
              total: 1583555.26,
              incidencia: 0.92,
            },
          },
        },
        {
          id: 11,
          nombre: "PISOS",
          importes: {
            D: {
              materiales: 2261543.3,
              ejecucion: 1213344.52,
              total: 3474887.82,
              incidencia: 2.02,
            },
          },
        },
        {
          id: 12,
          nombre: "ZÓCALOS",
          importes: {
            D: {
              materiales: 1261543.3,
              ejecucion: 1213344.52,
              total: 2474887.82,
              incidencia: 1.44,
            },
          },
        },
        {
          id: 13,
          nombre: "CARPINTERÍAS",
          importes: {
            D: {
              materiales: 9112956.08,
              ejecucion: 2198077.79,
              total: 11311033.87,
              incidencia: 6.57,
            },
          },
        },
        {
          id: 14,
          nombre: "VIDRIOS",
          importes: {
            D: {
              materiales: 1251344.69,
              ejecucion: 1030067.03,
              total: 2281411.69,
              incidencia: 1.33,
            },
          },
        },
        {
          id: 15,
          nombre: "PINTURAS",
          importes: {
            D: {
              materiales: 6390876.78,
              ejecucion: 6512762.74,
              total: 12903639.52,
              incidencia: 7.5,
            },
          },
        },
        {
          id: 16,
          nombre: "INSTALACIONES ELÉCTRICAS",
          importes: {
            D: {
              materiales: 11381900.0,
              ejecucion: 4225755.56,
              total: 15607655.56,
              incidencia: 9.07,
            },
          },
        },
        {
          id: 17,
          nombre: "INSTALACIONES SANITARIAS",
          importes: {
            D: {
              materiales: 7941538.35,
              ejecucion: 2253318.95,
              total: 10194857.31,
              incidencia: 5.93,
            },
          },
        },
        {
          id: 18,
          nombre: "INSTALACIONES DE GAS",
          importes: {
            D: {
              materiales: 1224210.26,
              ejecucion: 667995.51,
              total: 1892205.77,
              incidencia: 0.62,
            },
          },
        },
        {
          id: 19,
          nombre: "EQUIPAMIENTO",
          importes: {
            D: {
              materiales: 1224210.26,
              ejecucion: 1667995.51,
              total: 2892205.77,
              incidencia: 1.68,
            },
          },
        },
        {
          id: 20,
          nombre: "VARIOS",
          importes: {
            D: {
              materiales: 4375273.18,
              ejecucion: 1722043.5,
              total: 6097316.78,
              incidencia: 3.55,
            },
          },
        },
      ],
      totales: {
        costoDirectoTotal: 172034446.41,
        costoDirectoM2: 573448.15,
        incidenciaMateriales: 55.69,
        incidenciaEjecucion: 44.31,
        gastosGenerales: 43008611.6,
        beneficiosEmpresariales: 25805166.96,
        subtotalSinImpuesto: 240848224.98,
        iva: 50578127.25,
        precioFinalTotal: 291426352.22,
        precioFinalM2: 971421.17,
      },
    },
  ],
}

// Función para guardar los datos en localStorage
export const guardarDatos = (datos: DatosProyecto) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("datos_proyecto", JSON.stringify(datos))
  }
}

// Función para cargar los datos desde localStorage
export const cargarDatos = (): DatosProyecto => {
  if (typeof window !== "undefined") {
    const datos = localStorage.getItem("datos_proyecto")
    if (datos) {
      return JSON.parse(datos)
    }
  }
  // Si no hay datos guardados, inicializar con los datos por defecto
  guardarDatos(datosIniciales)
  return datosIniciales
}

// Función para actualizar un rubro específico
export const actualizarRubro = (
  tipologiaId: string,
  rubroId: number,
  nuevosDatos: {
    materiales?: number
    ejecucion?: number
  },
) => {
  const datos = cargarDatos()
  const tipologiaIndex = datos.tipologias.findIndex((t) => t.id === tipologiaId)

  if (tipologiaIndex === -1) return false

  const rubroIndex = datos.tipologias[tipologiaIndex].rubros.findIndex((r) => r.id === rubroId)

  if (rubroIndex === -1) return false

  const rubro = datos.tipologias[tipologiaIndex].rubros[rubroIndex]

  // Actualizar los valores
  if (nuevosDatos.materiales !== undefined) {
    rubro.importes[tipologiaId].materiales = nuevosDatos.materiales
  }

  if (nuevosDatos.ejecucion !== undefined) {
    rubro.importes[tipologiaId].ejecucion = nuevosDatos.ejecucion
  }

  // Recalcular el total
  rubro.importes[tipologiaId].total = rubro.importes[tipologiaId].materiales + rubro.importes[tipologiaId].ejecucion

  // Recalcular los totales de la tipología
  recalcularTotalesTipologia(datos, tipologiaIndex)

  // Guardar los datos actualizados
  guardarDatos(datos)

  return true
}

// Función para recalcular los totales de una tipología
const recalcularTotalesTipologia = (datos: DatosProyecto, tipologiaIndex: number) => {
  const tipologia = datos.tipologias[tipologiaIndex]

  // Calcular el costo directo total
  let costoDirectoTotal = 0
  let totalMateriales = 0
  let totalEjecucion = 0

  tipologia.rubros.forEach((rubro) => {
    const importes = rubro.importes[tipologia.id]
    costoDirectoTotal += importes.total
    totalMateriales += importes.materiales
    totalEjecucion += importes.ejecucion

    // Recalcular la incidencia
    importes.incidencia = Number(((importes.total / costoDirectoTotal) * 100).toFixed(2))
  })

  // Actualizar los totales
  tipologia.totales.costoDirectoTotal = costoDirectoTotal

  // Calcular las incidencias
  tipologia.totales.incidenciaMateriales = Number(((totalMateriales / costoDirectoTotal) * 100).toFixed(2))
  tipologia.totales.incidenciaEjecucion = Number(((totalEjecucion / costoDirectoTotal) * 100).toFixed(2))

  // Calcular los demás valores
  tipologia.totales.gastosGenerales = costoDirectoTotal * 0.26 // 26% del costo directo total
  tipologia.totales.beneficiosEmpresariales = costoDirectoTotal * 0.15 // 15% del costo directo total
  tipologia.totales.subtotalSinImpuesto =
    costoDirectoTotal + tipologia.totales.gastosGenerales + tipologia.totales.beneficiosEmpresariales
  tipologia.totales.iva = tipologia.totales.subtotalSinImpuesto * 0.21 // 21% de IVA
  tipologia.totales.precioFinalTotal = tipologia.totales.subtotalSinImpuesto + tipologia.totales.iva

  // Calcular los valores por m²
  let superficieTotal = 0
  switch (tipologia.id) {
    case "A":
    case "B":
      superficieTotal = 85 // 85m² para tipologías A y B
      break
    case "C":
      superficieTotal = 2500 // 2500m² para tipología C
      break
    case "D":
      superficieTotal = 300 // 300m² para tipología D
      break
  }

  tipologia.totales.costoDirectoM2 = Number((costoDirectoTotal / superficieTotal).toFixed(2))
  tipologia.totales.precioFinalM2 = Number((tipologia.totales.precioFinalTotal / superficieTotal).toFixed(2))
}

