const fracturedWorldData = {
  origin: {
    access:'anchor', visual:'origin', image:'assets/atlas-origin.webp',
    code:{en:'PRIMARY ANCHOR / ORIGIN SIGNAL',es:'ANCLA PRIMARIA / SEÑAL DE ORIGEN'},
    designation:{en:"Mark's World",es:'Mundo de Mark'},
    status:{en:'Stable resonance',es:'Resonancia estable'},
    quote:{en:'Every journey leaves from somewhere ordinary.',es:'Todo viaje parte de algún lugar ordinario.'},
    warning:{en:'No dimensional anomaly confirmed.',es:'No se ha confirmado ninguna anomalía dimensional.'},
    archive:{en:'The origin signal anchors the cartography. Its complete function remains under observation.',es:'La señal de origen ancla la cartografía. Su función completa permanece bajo observación.'}
  },
  forest: {
    access:'open', visual:'forest', image:'assets/atlas-living-forest.webp',
    code:{en:'WORLD FILE 01 / OPEN',es:'ARCHIVO DE MUNDO 01 / ABIERTO'},
    designation:{en:'The Living Forest',es:'El Bosque Viviente'},
    status:{en:'Resonance active',es:'Resonancia activa'},
    quote:{en:'The forest watches before it chooses whom to trust.',es:'El bosque observa antes de decidir en quién confiar.'},
    warning:{en:'Corruption detected near the Heart Tree.',es:'Corrupción detectada cerca del Árbol Corazón.'},
    archive:{en:'A living system of roots, memory and ancient guardians. The first accessible fracture beyond the Origin.',es:'Un sistema viviente de raíces, memoria y guardianes antiguos. La primera fractura accesible más allá del Origen.'}
  },
  sea: {
    access:'classified', visual:'sea', image:'assets/archive-infinite-sea.webp',
    code:{en:'SUBMERGED SIGNAL / ARCHIVE INCOMPLETE',es:'SEÑAL SUMERGIDA / ARCHIVO INCOMPLETO'},
    designation:{en:'No information',es:'Sin información'},
    status:{en:'Signal incomplete',es:'Señal incompleta'},
    quote:{en:'Beneath a surface without a horizon, something ancient continues to wait.',es:'Bajo una superficie sin horizonte, algo antiguo continúa esperando.'},
    warning:{en:'Discover this world to recover its dimensional record.',es:'Descubre este mundo para recuperar su registro dimensional.'},
    archive:{en:'Only the outline of a submerged structure survived the transmission.',es:'Solo el contorno de una estructura sumergida sobrevivió a la transmisión.'}
  },
  altaria: {
    access:'open', visual:'altaria', image:'assets/atlas-altaria.webp',
    code:{en:'WORLD FILE 03 / OPEN',es:'ARCHIVO DE MUNDO 03 / ABIERTO'},
    designation:{en:'Altaria / The Eternal Skies',es:'Altaria / Los Cielos Eternos'},
    status:{en:'Unstable but recoverable',es:'Inestable pero recuperable'},
    quote:{en:'The sky remembers every oath carried by the wind.',es:'El cielo recuerda cada juramento transportado por el viento.'},
    warning:{en:'Atmospheric routes shift without warning.',es:'Las rutas atmosféricas cambian sin previo aviso.'},
    archive:{en:'A vertical world of suspended refuges, ancient currents and alliances shaped above the clouds.',es:'Un mundo vertical de refugios suspendidos, corrientes antiguas y alianzas formadas sobre las nubes.'}
  },
  forge: {
    access:'classified', visual:'forge', image:'assets/archive-shadow-forge.webp',
    code:{en:'FORGE SIGNAL / ACCESS RESTRICTED',es:'SEÑAL DE FORJA / ACCESO RESTRINGIDO'},
    designation:{en:'No information',es:'Sin información'},
    status:{en:'Signal incomplete',es:'Señal incompleta'},
    quote:{en:'The fire remains lit, although no one remembers who feeds it.',es:'El fuego permanece encendido, aunque nadie recuerda quién lo alimenta.'},
    warning:{en:'Discover this world to authorize access to the archive.',es:'Descubre este mundo para autorizar el acceso al archivo.'},
    archive:{en:'A temple-machine appears for less than a second in every recovered transmission.',es:'Un templo-máquina aparece durante menos de un segundo en cada transmisión recuperada.'}
  },
  conclave: {
    access:'open', visual:'crystal', image:'assets/atlas-crystal-conclave.webp',
    code:{en:'WORLD FILE 05 / OPEN',es:'ARCHIVO DE MUNDO 05 / ABIERTO'},
    designation:{en:'The Crystal Conclave',es:'El Cónclave de Cristal'},
    status:{en:'Fractured resonance',es:'Resonancia fracturada'},
    quote:{en:'One truth can cast more than one reflection.',es:'Una verdad puede proyectar más de un reflejo.'},
    warning:{en:'Perception cannot be treated as reliable evidence.',es:'La percepción no puede considerarse evidencia confiable.'},
    archive:{en:'A crystalline domain where memory, identity and possibility refract into competing versions.',es:'Un dominio cristalino donde la memoria, la identidad y la posibilidad se refractan en versiones enfrentadas.'}
  },
  lostA: {
    access:'corrupt', visual:'corrupt', image:'assets/atlas-corruption-a.webp',
    code:{en:'RESTRICTED SIGNAL A / CRITICAL',es:'SEÑAL RESTRINGIDA A / CRÍTICA'},
    designation:{en:'Information restricted',es:'Información restringida'},
    status:{en:'Critical corruption',es:'Corrupción crítica'},
    quote:{en:'The natural resonance has been replaced.',es:'La resonancia natural ha sido reemplazada.'},
    warning:{en:'Recovery may no longer be possible.',es:'Es posible que la recuperación ya no sea viable.'},
    archive:{en:'Identity withheld. The signal rejects all attempts at stable contact.',es:'Identidad reservada. La señal rechaza todo intento de contacto estable.'}
  },
  unknownA: {
    access:'unknown', visual:'unknown', image:'assets/atlas-unknown-threshold.webp',
    code:{en:'UNRESOLVED SIGNAL / CLASSIFIED',es:'SEÑAL SIN RESOLVER / CLASIFICADA'},
    designation:{en:'No information',es:'Sin información'},
    status:{en:'Unknown',es:'Desconocido'},
    quote:{en:'A response exists beyond the threshold.',es:'Existe una respuesta más allá del umbral.'},
    warning:{en:'Attunement required to recover this file.',es:'Se requiere sintonía para recuperar este archivo.'},
    archive:{en:'The archive contains only a repeating pulse and an incomplete coordinate.',es:'El archivo contiene únicamente un pulso repetido y una coordenada incompleta.'}
  },
  lostB: {
    access:'corrupt', visual:'corrupt', image:'assets/atlas-corruption-b.webp',
    code:{en:'RESTRICTED SIGNAL B / CRITICAL',es:'SEÑAL RESTRINGIDA B / CRÍTICA'},
    designation:{en:'Information restricted',es:'Información restringida'},
    status:{en:'Critical corruption',es:'Corrupción crítica'},
    quote:{en:'Something continues transmitting through the wound.',es:'Algo continúa transmitiendo a través de la herida.'},
    warning:{en:'Contact prohibited. Recovery probability: indeterminate.',es:'Contacto prohibido. Probabilidad de recuperación: indeterminada.'},
    archive:{en:'Identity withheld. Wine-dark interference has consumed the original signature.',es:'Identidad reservada. La interferencia vino oscuro ha consumido la firma original.'}
  },
  unknownB: {
    access:'unknown', visual:'unknown', image:'assets/atlas-unknown-horizon.webp',
    code:{en:'DISTANT SIGNAL / CLASSIFIED',es:'SEÑAL DISTANTE / CLASIFICADA'},
    designation:{en:'No information',es:'Sin información'},
    status:{en:'Beyond current range',es:'Fuera del alcance actual'},
    quote:{en:'The horizon recedes whenever it is observed.',es:'El horizonte retrocede cada vez que es observado.'},
    warning:{en:'Continue the journey to expand the cartography.',es:'Continúa el viaje para ampliar la cartografía.'},
    archive:{en:'Only a distorted horizon survived. The archive cannot determine what lies beyond it.',es:'Solo sobrevivió un horizonte distorsionado. El archivo no puede determinar qué existe más allá.'}
  }
};

