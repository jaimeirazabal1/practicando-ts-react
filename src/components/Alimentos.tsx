import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import { Alimento } from './Alimento';
export const Alimentos = () => {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Lista N° 1: Leche</Accordion.Header>
                <Accordion.Body>
                    <p>Alimento	Medida Práctica	<b>Gramos o CC</b></p>
                    <p>Leche muy baja en grasa (0 – 3 gramos/intercambio)</p>

                    <Alimento nombre="Leche descremada 1%	1 taza	240cc" />
                    <Alimento nombre="Leche descremada 1% en polvo	4 cdas	32cc" />
                    <Alimento nombre="Leche evaporada descremada	½ taza	120cc" />
                    <Alimento nombre="Yogurt simple descremado	¾ taza	180" />
                    <Alimento nombre="Yogurt con frutas descremada (sin azúcar)1 taza 240" />
                    <Alimento nombre="Leche baja en grasa (5 gramos grasa/intercambio)" />
                    <Alimento nombre="Leche descremada al 2%	1 taza	240" />
                    <Alimento nombre="Yogurt líquido semi descremado c/frutas ¾ taza 180" />
                    <Alimento nombre="Leche acidificada	1 taza	240" />
                    <Alimento nombre="Leche entera (8 gramos grasa/intercambio)" />
                    <Alimento nombre="Leche entera	1 taza	240" />
                    <Alimento nombre="Leche entera en polvo	4 cucharadas	32" />
                    <Alimento nombre="Leche evaporada	½ taza	120" />
                    <Alimento nombre="Leche de cabra	1 taza	240" />
                    <Alimento nombre="Kefir	1 taza	240" />
                    <Alimento nombre="Suero de leche" />

                </Accordion.Body>
            </Accordion.Item >
            <Accordion.Item eventKey="1">
                <Accordion.Header>Lista N° 2: Hortalizas y Vegetales</Accordion.Header>
                <Accordion.Body>
                    <Alimento nombre="Leche descremada 1%	1 taza	240cc" />
                    <Alimento nombre="Alcachofa" />
                    <Alimento nombre="Escarola" />
                    <Alimento nombre="Corazón de alcachofa" />
                    <Alimento nombre="Lechuga" />
                    <Alimento nombre="Acelga" />
                    <Alimento nombre="Espinaca" />
                    <Alimento nombre="Brócoli" />
                    <Alimento nombre="Auyama" />
                    <Alimento nombre="Repollitos de Bruselas	" />
                    <Alimento nombre="Tomate" />
                    <Alimento nombre="Repollo	" />
                    <Alimento nombre="Tomate enlatado" />
                    <Alimento nombre="Zanahoria	" />
                    <Alimento nombre="Jugo de tomate" />
                    <Alimento nombre="Coliflor	" />
                    <Alimento nombre="Berros" />
                    <Alimento nombre="Celery o apio España	" />
                    <Alimento nombre="Calabacín" />
                    <Alimento nombre="Pepino	" />
                    <Alimento nombre="Cebolla" />
                    <Alimento nombre="Berenjena	" />
                    <Alimento nombre="Vainitas" />
                    <Alimento nombre="Nabo	" />
                    <Alimento nombre="Pimienta" />
                    <Alimento nombre="Hongos	" />
                    <Alimento nombre="Rábanos" />
                    <Alimento nombre="Quimbombó	" />
                    <Alimento nombre="Chicoria" />
                    <Alimento nombre="Ají	" />
                    <Alimento nombre="Espárragos" />
                    <Alimento nombre="Ajo	Perejil" />
                    <Alimento nombre="Ajo porro	" />
                    <Alimento nombre="Pimentón" />
                    <Alimento nombre="Alfalfa	Hinojo" />
                    <Alimento nombre="Palmito	Vegetales chinos" />
                    <Alimento nombre="Cebollín	" />
                    <Alimento nombre="Remolacha" />
                    <Alimento nombre="Chayota" />

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Lista N° 3: Frutas</Accordion.Header>
                <Accordion.Body>
                    <p>Un intercambio de frutas se corresponde con:</p>
                    <ul>
                        <li>1 unidad pequeña o mediana</li>
                        <li>½ taza de fruta fresca o enlatada</li>
                        <li>¼ taza de fruta seca</li>
                    </ul>
                    <p>TIPS NUTRICIONALES:</p>
                    <ul>
                        <li>	Las frutas frescas, congeladas y secas tienen cerca de 2 gramos de fibra por intercambio. Los batidos de frutas tienen muy poca cantidad de fibra (0,5 g por intercambio).</li>
                        <li>	Las frutas cítricas son muy buena fuente de vitamina C.</li>
                    </ul>

                    <Alimento nombre="Manzana con piel 1 unidad peq o ½ unidad grande 120 gr" />
                    <Alimento nombre="Manzana con piel	1 unidad peq o ½ unidad grande	120gr" />
                    <Alimento nombre="Albaricoque	1 unidad	150gr" />
                    <Alimento nombre="Cambur guineo	½ unidad	90gr" />
                    <Alimento nombre="Cambur manzano	1 unidad peq.	90gr" />
                    <Alimento nombre="Cerezas frescas (semeruco)	12	100gr" />
                    <Alimento nombre="Higos frescos	2 unidades med	75gr" />
                    <Alimento nombre="Grapefruit	½ unidad grande	330gr" />
                    <Alimento nombre="Uvas	15 unidad peq o 6 gdes	90gr" />
                    <Alimento nombre="Kiwi	1 unidad	100gr" />
                    <Alimento nombre="Melón rosado	2 tazas o 1 trozo gde	300gr" />
                    <Alimento nombre="Melón verde	1 ½ taza	200gr" />
                    <Alimento nombre="Mango bocado	½ taza (cubos) o 1 unid peq	150gr" />
                    <Alimento nombre="Nectarina	1 unidad peq	120gr" />
                    <Alimento nombre="Naranja	1 unidad peq	190gr" />
                    <Alimento nombre="Lechosa	2 tazas (en cubos)	200gr" />
                    <Alimento nombre="Lechosa c/corteza	1 trozo	270gr" />
                    <Alimento nombre="Melocotón	1 unidad	180gr" />
                    <Alimento nombre="Pera	1 unidad peq o ½ unidad gde	120gr" />
                    <Alimento nombre="Piña	¾ taza/ 1 reb 1cm. O 2 finas	100gr" />
                    <Alimento nombre="Ciruelas importadas	2 unidades	150gr" />
                    <Alimento nombre="Ciruela de huesito	8 unidades	100gr" />
                    <Alimento nombre="Mandarina	1 unidad mediana	200gr" />
                    <Alimento nombre="Patilla	2 tazas (en cubos) o 1 trozo grande	300gr" />
                    <Alimento nombre="Durazno	1 unidad med	70gr" />
                    <Alimento nombre="Fresas	1 taza	180gr" />
                    <Alimento nombre="Guanábana	½ taza (pulpa)	100gr" />
                    <Alimento nombre="Guayaba rosada	1 unidad med	200gr" />
                    <Alimento nombre="Hicaco	1 unidad med	120gr" />
                    <Alimento nombre="Jobo	1 unidad med	100gr" />
                    <Alimento nombre="Mamón	1 taza	90gr" />
                    <Alimento nombre="Mora	1 taza	120gr" />
                    <Alimento nombre="Níspero	1 unidad peq.	90gr" />
                    <Alimento nombre="Tuna	1 unidad med	80gr" />
                    <Alimento nombre="Mamey	1 unidad peq.	170gr" />
                    <Alimento nombre="Riñón	1 unidad peq.	80gr" />
                    <Alimento nombre="Tamarindo pulpa	-	20gr" />
                    <Alimento nombre="Toronja	½ unidad	180gr" />
                    <Alimento nombre="Parchita entera	2 unidades	140gr" />
                    <Alimento nombre="Parcha granadina	-	150gr" />
                    <Alimento nombre="Zapote	¼ unidad	60gr" />

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Lista N° 4: Almidones, cereales y panes</Accordion.Header>
                <Accordion.Body>
                    <p>Un intercambio de almidones corresponde a:</p>
                    <ul>
                        <li>	½ taza de cereal, granos, pasta o tubérculos.</li>
                        <li>	30 gramos de productos como panes (1 rebanada)</li>
                        <li>	¾ taza o 30 gramos de la mayoría de los alimentos tipo snack (algunos pueden tener grasa añadida)</li>
                    </ul>
                    <p>Tips nutricionales:</p>
                    <ul>
                        <li>	La mayoría de las porciones son medidas después de cocinar.</li>
                        <li>	Los alimentos elaborados de grano entero son buena fuente de fibra.</li>
                        <li>	Los granos o cereales secos y leguminosas son buena fuente de proteínas y fibra.</li>
                    </ul>
                    <p>Panes</p>
                    <Alimento nombre="Pan bajo en calorías (ligero)	2 rebanadas	45 gr" />
                    <Alimento nombre="Pan blanco o integral	1 rebanada	30 gr" />
                    <Alimento nombre="Pan de hamburguesa o perro caliente	½ unidad	30 gr" />
                    <Alimento nombre="Pan sueco	2 unidades	20 gr" />
                    <Alimento nombre="Tortilla harina de maíz (13cm diámetro)	1 unidad	- gr" />
                    <Alimento nombre="Tortilla harina de maíz (13 cm de diámetro)	1 unidad	- gr" />
                    <Alimento nombre="Pan pita (7 cm de diámetro)	1 unidad	- gr" />
                    <p>Cereales</p>
                    <Alimento nombre="Arepa de maíz	1 unidad peq	40 gr" />
                    <Alimento nombre="Harina de maíz	2 ½ cucharadas	25 gr" />
                    <Alimento nombre="Maíz (grano)	½ taza	120 gr" />
                    <Alimento nombre="Mazorca	½ unidad	100 gr" />
                    <Alimento nombre="Cereales integrales (Special K)	¾ taza	- gr" />
                    <Alimento nombre="Cereales cocidos	½ taza	100 gr" />
                    <Alimento nombre="Hojuelas de maíz	¾ taza	25 gr" />
                    <Alimento nombre="Granola baja en grasa	¼ taza	- gr" />
                    <Alimento nombre="Muesli / All bran	¼ taza	20 gr" />
                    <Alimento nombre="Avena en hojuelas	3 cdas	16 gr" />
                    <Alimento nombre="Arroz cocido	½ taza	80 gr" />
                    <Alimento nombre="Pasta cocida	½ taza	70 gr" />
                    <Alimento nombre="Germen de trigo	3 cdas	- gr" />
                    <Alimento nombre="Cereal de desayuno azucarado	½ taza	- gr" />
                    <Alimento nombre="Cotufas (sin grasa)	3 tazas	25 gr" />
                    <p>Tubérculos y Plátano</p>
                    <Alimento nombre="Papa cocida	1 unidad peq.	100 gr" />
                    <Alimento nombre="Papa cocida colombiana (mini)	5 unidades	100 gr" />
                    <Alimento nombre="Puré de papas	½ taza	100 gr" />
                    <Alimento nombre="Apio, ñame, ocumo, batata	1 trozo peq.	80 gr" />
                    <Alimento nombre="Apio, ñame, ocumo, batata (puré)	½ taza	120 gr" />
                    <Alimento nombre="Yuca	1 trozo peq.	60 gr" />
                    <Alimento nombre="Plátano	¼ unidad	50 gr" />
                    <p>Galletas</p>
                    <Alimento nombre="De soda (1)	3 unid (1 paquete)	25 gr" />
                    <Alimento nombre="Dulces tipo María (2)	3 unid (1 paquete)	20 gr" />
                    <Alimento nombre="Money Bran (2)	3 unid (1 paquete)	30 gr" />
                    <Alimento nombre="Dulces animalitos	8 unidades	25 gr" />
                    <Alimento nombre="Integrales (2)	3 und (1 paquete)	30 gr" />
                    <Alimento nombre="Saltines (2)	6 unidades	25 gr" />
                    <Alimento nombre="De arroz	2 unidades	20 gr" />
                    <p>Leguminosas</p>
                    <Alimento nombre="Caraotas negras, blancas y rojas	½ taza	80 gr" />
                    <Alimento nombre="Lentejas	½ taza	80 gr" />
                    <Alimento nombre="Garbanzos	½ taza	120 gr" />
                    <Alimento nombre="Habas	½ taza	120 gr" />
                    <Alimento nombre="Guisantes	½ taza	120 gr" />


                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Lista N° 5: Carnes</Accordion.Header>
                <Accordion.Body>
                    <p>Un intercambio de carnes equivale a:</p>
                    <ul>
                        <li>	1 onza (30 g) de carne, pollo, pescado o queso</li>
                        <li>	½ taza de habas, guisantes y/o lentejas</li>
                    </ul>
                    <Alimento nombre="Aves de corral: pollo, gallina o pavo (carne blanca sin piel)	-	30" />
                    <Alimento nombre="Pescado: fresco o congelado, lenguado, bacalao, atún	-	30" />
                    <Alimento nombre="Mariscos y/o moluscos: almejas, langosta, camarón	-	30" />
                    <Alimento nombre="Animales de caza: faisán (sin piel), venado, búfalo	-	30" />
                    <Alimento nombre="Quesos: bajo en grasa	¼ taza	30" />
                    <Alimento nombre="Huevos: Claras (gallina)	2 unidades	50" />
                    <Alimento nombre="Carnes magras" />
                    <Alimento nombre="Animales de caza: ganso (sin piel), conejo	-	30" />
                    <p>Quesos:</p>
                    <Alimento nombre="4,5% grasa requesón  ¼ taza 45" />
                    <Alimento nombre="Parmesano rallado 1 cucharada rasa 15" />
                    <p>Otros:</p>
                    <Alimento nombre="Jamón de pierna
                    Pechuga de pavo o pollo	1 lonja gruesa o 2 finas
                    30"/>
                    <p>Carnes semigordas</p>
                    <Alimento nombre="Aves de corral: pollo, gallina o pavo (carne oscura c/piel)
                    1 trozo pequeño o
                    2 cucharadas
                    (molida, mechado
                    o desmenuzado
                    sin aliños)
                    Res: la mayoría de las carnes de res entran en esta categoría. 30"/>
                    <Alimento nombre="Cerdo: lomo		30" />
                    <Alimento nombre="Animales de caza: Cordero (costilla), ternera (chuleta)" />		30
                    <Alimento nombre="Pescado: cualquier tipo		30" />
                    <p>Quesos(con 5g de grasa o menos)</p>
                    <Alimento nombre="Mozzarella 1 reb gruesa o 2 finas 30" />
                    <Alimento nombre="Mozzarella de búfala  ¼ de unidad 30" />
                    <Alimento nombre="Ricotta  ¼ taza 45" />
                    <Alimento nombre="Feta 30" />


                    <Alimento nombre="Amarillos (+ 1 intercambio de grasa)	-	30" />
                    <p>Huevos</p>
                    <Alimento nombre="Entero (gallina)	1 unidad	50" />
                    <p>Carnes gordas</p>
                    <Alimento nombre="Bologna	1 rebanada	30" />
                    <Alimento nombre="Salami	5 rebanadas	30" />
                    <Alimento nombre="Salchicha	1 unidad regular	30" />

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header>Lista N° 6: Grasas</Accordion.Header>
                <Accordion.Body>
                    <Alimento nombre="Aguacate	1/8	30" />
                    <Alimento nombre="Aceite (canola, oliva, maní)	1 cdta	5" />
                    <Alimento nombre="Aceitunas: negras 8 grandes 30" />
                    <Alimento nombre="Verdes (rellenas)	 10 grandes 30" />
                    <Alimento nombre="Nueces: Almendras 6 unidades 6 " />
                    <Alimento nombre="Maní (en concha) 10 unidades 6 " />
                    <Alimento nombre="Nuez lisa	 2 unidades " />

                    <Alimento nombre="Mantequilla de maní	2 cdtas	10" />
                    <Alimento nombre="Semillas de ajonjolí	1 cda	30" />
                    <p>Grasas poliinsaturadas</p>
                    <Alimento nombre="Margarina: Regular 1 cdta 5" />
                    <Alimento nombre="Baja en grasa	 1 cda 15" />
                    <Alimento nombre="Mayonesa: Regular 1 cdta 5" />
                    <Alimento nombre="Baja en grasa	 1 cda 15" />

                    <Alimento nombre="Nueces	2 unidades	-" />
                    <Alimento nombre="Aceite: maíz, girasol o soya	1 cdta	5" />
                    <p>Aderezos para ensaladas:</p>
                    <Alimento nombre="Miracle whip reg. 2 cdtas 10" />
                    <Alimento nombre="Miracle whip bajo grasa 1 cda 15" />


                    <Alimento nombre="Semillas: auyama, girasol	1 cda	30" />
                    <p>Grasas saturadas</p>
                    <Alimento nombre="Tocineta (cocida)	3 unidades	30" />
                    <Alimento nombre="Mantequilla	1 cdta	5" />
                    <Alimento nombre="Coco endulzado, rallado	2 cdas	-" />
                    <Alimento nombre="Queso crema regular	1 cda	15" />
                    <Alimento nombre="Queso fundido estilo americano	1 cucharada	15" />
                    <Alimento nombre="Manteca de cerdo	1 cdta	5" />

                </Accordion.Body>
            </Accordion.Item>
        </Accordion >
    )
}
