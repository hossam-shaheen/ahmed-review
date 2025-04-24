import React from "react";
import Card from "./Card";
import "./Cards.css";
export default function Cards({ filterCharacter }) {
  const busCompanies = [
    // A
    {
      name: "Andesmar",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Andesmar_logo.png/320px-Andesmar_logo.png",
      link: "#",
    },
    {
      name: "Autotransportes de México",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Autotransportes_de_M%C3%A9xico_logo.png/320px-Autotransportes_de_M%C3%A9xico_logo.png",
      link: "#",
    },
    {
      name: "Ado",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Ado_logo.png/320px-Ado_logo.png",
      link: "#",
    },
    {
      name: "Alianza",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Alianza_logo.png/320px-Alianza_logo.png",
      link: "#",
    },
    {
      name: "Auto Expreso",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Auto_Expreso_logo.png/320px-Auto_Expreso_logo.png",
      link: "#",
    },

    // B
    {
      name: "Bus Norte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Logo_Bus_Norte.png/320px-Logo_Bus_Norte.png",
      link: "#",
    },
    {
      name: "Buses BAM",
      logo: "https://upload.wikimedia.org/wikipedia/en/3/3d/BAM_Bus_logo.png",
      link: "#",
    },
    {
      name: "Bus Plus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Bus_Plus_logo.png/320px-Bus_Plus_logo.png",
      link: "#",
    },
    {
      name: "BlaBlaBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BlaBlaBus_logo.png/320px-BlaBlaBus_logo.png",
      link: "#",
    },
    {
      name: "Brisa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Brisa_logo.png/320px-Brisa_logo.png",
      link: "#",
    },

    // C
    {
      name: "Colectivos del Norte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Colectivos_del_Norte_logo.png/320px-Colectivos_del_Norte_logo.png",
      link: "#",
    },
    {
      name: "Central de Autobuses",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Central_de_Autobuses_logo.png/320px-Central_de_Autobuses_logo.png",
      link: "#",
    },
    {
      name: "Chilebus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Chilebus_logo.png/320px-Chilebus_logo.png",
      link: "#",
    },
    {
      name: "Copa Airlines Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Copa_Airlines_logo.png/320px-Copa_Airlines_logo.png",
      link: "#",
    },
    {
      name: "City Sightseeing",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/City_Sightseeing_logo.png/320px-City_Sightseeing_logo.png",
      link: "#",
    },

    // D
    {
      name: "Deluxe Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Deluxe_Bus_logo.png/320px-Deluxe_Bus_logo.png",
      link: "#",
    },
    {
      name: "DATS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/DATS_logo.png/320px-DATS_logo.png",
      link: "#",
    },
    {
      name: "Dibbus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Dibbus_logo.png/320px-Dibbus_logo.png",
      link: "#",
    },
    {
      name: "DHL Express Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/DHL_logo.png/320px-DHL_logo.png",
      link: "#",
    },
    {
      name: "Dast Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dast_Bus_logo.png/320px-Dast_Bus_logo.png",
      link: "#",
    },

    // E
    {
      name: "Estrella Blanca",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Estrella_Blanca_logo.png/320px-Estrella_Blanca_logo.png",
      link: "#",
    },
    {
      name: "EgoBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/EgoBus_logo.png/320px-EgoBus_logo.png",
      link: "#",
    },
    {
      name: "Ecuador Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ecuador_Bus_logo.png/320px-Ecuador_Bus_logo.png",
      link: "#",
    },
    {
      name: "Expresso 1001",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Expresso_1001_logo.png/320px-Expresso_1001_logo.png",
      link: "#",
    },
    {
      name: "Epsa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Epsa_logo.png/320px-Epsa_logo.png",
      link: "#",
    },

    // F
    {
      name: "First Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/First_Bus_logo.svg/2560px-First_Bus_logo.svg.png",
      link: "#",
    },
    {
      name: "FlixBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/FlixBus_logo.png/320px-FlixBus_logo.png",
      link: "#",
    },
    {
      name: "Futuras Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Futuras_Bus_logo.png/320px-Futuras_Bus_logo.png",
      link: "#",
    },
    {
      name: "FedeBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/FedeBus_logo.png/320px-FedeBus_logo.png",
      link: "#",
    },
    {
      name: "Flybus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Flybus_logo.png/320px-Flybus_logo.png",
      link: "#",
    },

    // G
    {
      name: "Grupo Senda",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Grupo_Senda_logo.png/320px-Grupo_Senda_logo.png",
      link: "#",
    },
    {
      name: "Groupe Gaudreault",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Groupe_Gaudreault_logo.png/320px-Groupe_Gaudreault_logo.png",
      link: "#",
    },
    {
      name: "Gulf Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Gulf_Bus_logo.png/320px-Gulf_Bus_logo.png",
      link: "#",
    },
    {
      name: "Gabon Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Gabon_Bus_logo.png/320px-Gabon_Bus_logo.png",
      link: "#",
    },
    {
      name: "Groupe Chenard",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Groupe_Chenard_logo.png/320px-Groupe_Chenard_logo.png",
      link: "#",
    },

    // H
    {
      name: "Helios Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Helios_Bus_logo.png/320px-Helios_Bus_logo.png",
      link: "#",
    },
    {
      name: "Hokkaido Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Hokkaido_Bus_logo.png/320px-Hokkaido_Bus_logo.png",
      link: "#",
    },
    {
      name: "Hoppa Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Hoppa_Bus_logo.png/320px-Hoppa_Bus_logo.png",
      link: "#",
    },
    {
      name: "Horizon Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Horizon_Bus_logo.png/320px-Horizon_Bus_logo.png",
      link: "#",
    },
    {
      name: "Hype Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Hype_Bus_logo.png/320px-Hype_Bus_logo.png",
      link: "#",
    },

    // I
    {
      name: "Interbus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Interbus_logo.png/320px-Interbus_logo.png",
      link: "#",
    },
    {
      name: "Iberia Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Iberia_Bus_logo.png/320px-Iberia_Bus_logo.png",
      link: "#",
    },
    {
      name: "Inbus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Inbus_logo.png/320px-Inbus_logo.png",
      link: "#",
    },
    {
      name: "Icarus Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Icarus_Bus_logo.png/320px-Icarus_Bus_logo.png",
      link: "#",
    },
    {
      name: "Indigo Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Indigo_Bus_logo.png/320px-Indigo_Bus_logo.png",
      link: "#",
    },
    // J
    {
      name: "JetBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/JetBus_logo.png/320px-JetBus_logo.png",
      link: "#",
    },
    {
      name: "Jamaica Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Jamaica_Bus_logo.png/320px-Jamaica_Bus_logo.png",
      link: "#",
    },
    {
      name: "Jersey Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Jersey_Bus_logo.png/320px-Jersey_Bus_logo.png",
      link: "#",
    },
    {
      name: "Jiangsu Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Jiangsu_Bus_logo.png/320px-Jiangsu_Bus_logo.png",
      link: "#",
    },
    {
      name: "Japan Express Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Japan_Express_Bus_logo.png/320px-Japan_Express_Bus_logo.png",
      link: "#",
    },

    // K
    {
      name: "Kobus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Kobus_logo.png/320px-Kobus_logo.png",
      link: "#",
    },
    {
      name: "Kuychi Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Kuychi_Bus_logo.png/320px-Kuychi_Bus_logo.png",
      link: "#",
    },
    {
      name: "Kota Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Kota_Bus_logo.png/320px-Kota_Bus_logo.png",
      link: "#",
    },
    {
      name: "Kronos Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Kronos_Bus_logo.png/320px-Kronos_Bus_logo.png",
      link: "#",
    },
    {
      name: "Kisumu Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Kisumu_Bus_logo.png/320px-Kisumu_Bus_logo.png",
      link: "#",
    },

    // L
    {
      name: "Lux Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Lux_Bus_logo.png/320px-Lux_Bus_logo.png",
      link: "#",
    },
    {
      name: "Lima Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Lima_Bus_logo.png/320px-Lima_Bus_logo.png",
      link: "#",
    },
    {
      name: "Lanzarote Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lanzarote_Bus_logo.png/320px-Lanzarote_Bus_logo.png",
      link: "#",
    },
    {
      name: "Lianhua Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lianhua_Bus_logo.png/320px-Lianhua_Bus_logo.png",
      link: "#",
    },
    {
      name: "Lagos Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Lagos_Bus_logo.png/320px-Lagos_Bus_logo.png",
      link: "#",
    },

    // M
    {
      name: "Mega Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Mega_Bus_logo.png/320px-Mega_Bus_logo.png",
      link: "#",
    },
    {
      name: "MTA Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MTA_Bus_logo.png/320px-MTA_Bus_logo.png",
      link: "#",
    },
    {
      name: "Metro Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Metro_Bus_logo.png/320px-Metro_Bus_logo.png",
      link: "#",
    },
    {
      name: "Mérida Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Merida_Bus_logo.png/320px-Merida_Bus_logo.png",
      link: "#",
    },
    {
      name: "Montreal Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Montreal_Bus_logo.png/320px-Montreal_Bus_logo.png",
      link: "#",
    },

    // N
    {
      name: "National Express",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/National_Express_logo.png/320px-National_Express_logo.png",
      link: "#",
    },
    {
      name: "New York Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/New_York_Bus_logo.png/320px-New_York_Bus_logo.png",
      link: "#",
    },
    {
      name: "Nashville Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Nashville_Bus_logo.png/320px-Nashville_Bus_logo.png",
      link: "#",
    },
    {
      name: "Northern Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Northern_Bus_logo.png/320px-Northern_Bus_logo.png",
      link: "#",
    },
    {
      name: "New Orleans Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/New_Orleans_Bus_logo.png/320px-New_Orleans_Bus_logo.png",
      link: "#",
    },

    {
      name: "Omnibus de México",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Omnibus_de_Mexico_logo.png/320px-Omnibus_de_Mexico_logo.png",
      link: "#",
    },
    {
      name: "Oceanside Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Oceanside_Bus_logo.png/320px-Oceanside_Bus_logo.png",
      link: "#",
    },
    {
      name: "Oregon Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Oregon_Bus_logo.png/320px-Oregon_Bus_logo.png",
      link: "#",
    },
    {
      name: "Orange County Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Orange_County_Bus_logo.png/320px-Orange_County_Bus_logo.png",
      link: "#",
    },
    {
      name: "Oasis Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Oasis_Bus_logo.png/320px-Oasis_Bus_logo.png",
      link: "#",
    },

    // P
    {
      name: "PandaNY Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/PandaNYBus_Logo.png/320px-PandaNYBus_Logo.png",
      link: "#",
    },
    {
      name: "Pacific Coast Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Pacific_Coast_Bus_logo.png/320px-Pacific_Coast_Bus_logo.png",
      link: "#",
    },
    {
      name: "PeruBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PeruBus_logo.png/320px-PeruBus_logo.png",
      link: "#",
    },
    {
      name: "Pune Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Pune_Bus_logo.png/320px-Pune_Bus_logo.png",
      link: "#",
    },
    {
      name: "Puerto Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Puerto_Bus_logo.png/320px-Puerto_Bus_logo.png",
      link: "#",
    },

    // Q
    {
      name: "Quito Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Quito_Bus_logo.png/320px-Quito_Bus_logo.png",
      link: "#",
    },
    {
      name: "Quebec Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Quebec_Bus_logo.png/320px-Quebec_Bus_logo.png",
      link: "#",
    },
    {
      name: "Queens Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Queens_Bus_logo.png/320px-Queens_Bus_logo.png",
      link: "#",
    },
    {
      name: "Queretaro Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Queretaro_Bus_logo.png/320px-Queretaro_Bus_logo.png",
      link: "#",
    },
    {
      name: "Qatar Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Qatar_Bus_logo.png/320px-Qatar_Bus_logo.png",
      link: "#",
    },

    // R
    {
      name: "RedBus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/RedBus_logo.png/320px-RedBus_logo.png",
      link: "#",
    },
    {
      name: "Rutas de América",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Rutas_de_America_logo.png/320px-Rutas_de_America_logo.png",
      link: "#",
    },
    {
      name: "Rápido Ochoa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Rapido_Ochoa_logo.png/320px-Rapido_Ochoa_logo.png",
      link: "#",
    },
    {
      name: "Rex Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Rex_Bus_logo.png/320px-Rex_Bus_logo.png",
      link: "#",
    },
    {
      name: "Rojo Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Rojo_Bus_logo.png/320px-Rojo_Bus_logo.png",
      link: "#",
    },

    // S
    {
      name: "SuBús",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/SUBUS_logo.png/320px-SUBUS_logo.png",
      link: "#",
    },
    {
      name: "Senda",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Senda_logo.png/320px-Senda_logo.png",
      link: "#",
    },
    {
      name: "St. Louis Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/St_Louis_Bus_logo.png/320px-St_Louis_Bus_logo.png",
      link: "#",
    },
    {
      name: "Santiago Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Santiago_Bus_logo.png/320px-Santiago_Bus_logo.png",
      link: "#",
    },
    {
      name: "Suwon Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Suwon_Bus_logo.png/320px-Suwon_Bus_logo.png",
      link: "#",
    },

    // T
    {
      name: "TAP Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/TAP_Bus_logo.png/320px-TAP_Bus_logo.png",
      link: "#",
    },
    {
      name: "Turismo Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Turismo_Bus_logo.png/320px-Turismo_Bus_logo.png",
      link: "#",
    },
    {
      name: "Transporte México",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Transporte_Mexico_logo.png/320px-Transporte_Mexico_logo.png",
      link: "#",
    },
    {
      name: "Transdev Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Transdev_Bus_logo.png/320px-Transdev_Bus_logo.png",
      link: "#",
    },
    {
      name: "Transcosta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Transcosta_logo.png/320px-Transcosta_logo.png",
      link: "#",
    },

    // U
    {
      name: "Urbano Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Urbano_Bus_logo.png/320px-Urbano_Bus_logo.png",
      link: "#",
    },
    {
      name: "Unión Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Union_Bus_logo.png/320px-Union_Bus_logo.png",
      link: "#",
    },
    {
      name: "Urbana Transporte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Urbana_Transporte_logo.png/320px-Urbana_Transporte_logo.png",
      link: "#",
    },
    {
      name: "Uber Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Uber_Bus_logo.png/320px-Uber_Bus_logo.png",
      link: "#",
    },
    {
      name: "UdeC Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/UdeC_Bus_logo.png/320px-UdeC_Bus_logo.png",
      link: "#",
    },

    // V
    {
      name: "Viva Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Viva_Bus_logo.png/320px-Viva_Bus_logo.png",
      link: "#",
    },
    {
      name: "Vancouver Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Vancouver_Bus_logo.png/320px-Vancouver_Bus_logo.png",
      link: "#",
    },
    {
      name: "Venezuela Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Venezuela_Bus_logo.png/320px-Venezuela_Bus_logo.png",
      link: "#",
    },
    {
      name: "Victoria Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Victoria_Bus_logo.png/320px-Victoria_Bus_logo.png",
      link: "#",
    },
    {
      name: "Valencia Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Valencia_Bus_logo.png/320px-Valencia_Bus_logo.png",
      link: "#",
    },

    // W
    {
      name: "West Coast Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/West_Coast_Bus_logo.png/320px-West_Coast_Bus_logo.png",
      link: "#",
    },
    {
      name: "Washington Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Washington_Bus_logo.png/320px-Washington_Bus_logo.png",
      link: "#",
    },
    {
      name: "Wolverhampton Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Wolverhampton_Bus_logo.png/320px-Wolverhampton_Bus_logo.png",
      link: "#",
    },
    {
      name: "West Yorkshire Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/West_Yorkshire_Bus_logo.png/320px-West_Yorkshire_Bus_logo.png",
      link: "#",
    },
    {
      name: "Wigan Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Wigan_Bus_logo.png/320px-Wigan_Bus_logo.png",
      link: "#",
    },

    // Z
    {
      name: "Zaragoza Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Zaragoza_Bus_logo.png/320px-Zaragoza_Bus_logo.png",
      link: "#",
    },
    {
      name: "Zurich Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Zurich_Bus_logo.png/320px-Zurich_Bus_logo.png",
      link: "#",
    },
    {
      name: "Zaragoza Transporte",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Zaragoza_Transporte_logo.png/320px-Zaragoza_Transporte_logo.png",
      link: "#",
    },
    {
      name: "Zambia Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Zambia_Bus_logo.png/320px-Zambia_Bus_logo.png",
      link: "#",
    },
    {
      name: "Zhangzhou Bus",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Zhangzhou_Bus_logo.png/320px-Zhangzhou_Bus_logo.png",
      link: "#",
    },
  ];

  let FilterBusCompanies = filterCharacter
    ? busCompanies.filter((company) => company.name.startsWith(filterCharacter))
    : busCompanies;

  return (
    <div className="companies">
      {FilterBusCompanies.map((company, index) => (
        <Card key={index} company={company} />
      ))}
    </div>
  );
}
