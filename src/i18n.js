import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Êtes-vous un chef de famille, un étudiant, en couple?",
        description: ` Asnap utilise l'IA pour décrypter vos PDF en important votre contrat et fournir une lecture claire, immédiate, fiable, rapide et transparente de vos garanties.`,
        startNow: "🔥 Démarrer Maintenant",
        imageAlt: "Assurance AI",
        analyzePdf: "Analyse intelligente de vos assurances", // Added
        withAI: "avec l'IA",
           learnMore: "En Savoir Plus"
      },
      home: "Accueil",
      roadmap: "Feuille de route",
      getStarted: "Commencer",
      uploadPdf: {
        title: "Téléversez Votre PDF",
        phonePlaceholder:"Entrer votre numéro  de téléphone",
        errorNoPhone:"Veuillez entrer votre numéro de téléphone!",
        emailPlaceholder: "Votre adresse e-mail",
        fileSelectedToast: "Fichier PDF sélectionné !",
        pdfOnlyToast: "Seuls les fichiers PDF sont autorisés !",
        fileDeletedToast: "Fichier supprimé !",
        fileSelected: "Sélectionné",
        dragDrop: "Glissez et déposez votre fichier PDF ici",
        optionalCategoriesTitle: "Rendre facultatives certaines catégories :",
        categories: {
          accident: "Accident",
          naturalMedicine: "Médecine naturelle",
          travelInsurance: "Assurance voyage",
        },
        descriptions: {
          accident:
            "Si vous bénéficiez déjà d’une couverture en clinique privée fournie par votre employeur dans le cadre de la LAA, vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative.",
          naturalMedicine:
            "Si vous avez une aversion complète pour les pratiques de médecine naturelle (ostéothérapie, acupuncture, chiropractie, médecine chinoise, homéopathie, naturopathie, etc.), vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative.",
          travelInsurance:
            "Si vous ne voyagez pas hors du territoire suisse ou si vous bénéficiez déjà d’une couverture privée offerte par un autre assureur (TCS, Zürich, Allianz, Generali, etc.), vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative."
        },
        acceptConditions: {
          prefix: "J'accepte les",
          link: "Conditions d'utilisation",
        },
        processing: "Traitement en cours...",
        generateBenchmark: "Générer le Benchmark",
        errorNoFile: "Veuillez sélectionner un fichier PDF !",
        errorNoEmail: "Veuillez entrer une adresse e-mail !",
        errorAgree: "Vous devez accepter les conditions !",
        benchmarkSuccessToast: "Benchmark généré avec succès !",
        benchmarkErrorToast: "Erreur lors de la génération du benchmark !",
      },
analysis: {
        sectionTitle: "Une vision claire, jusque dans les moindres détails",
        content: "Asnap Premium identifie les zones de flou souvent négligées : santé mentale, activité physique, situations particulières… Grâce à une analyse sur mesure, bénéficiez d’un accompagnement précis, fondé sur vos priorités personnelles.",
        premiumNote: "Aujourd’hui, nos experts vous conseillent directement. Demain, une IA comportementale prendra le relais pour affiner encore plus les recommandations.",
        futureLabel: "Anticipez. Optimisez. Décidez sereinement.",
        futureNote: "",
        buttonText: "Accéder au rapport complet(À bientôt !)"
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informations :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Service client :",
        clientServiceEmail: "clients@asnap.ch"
      },
      contact: {
        heroTitle: "Contact",
        heroDescription: "ASNAP simplifie la lecture et l'évaluation des contrats d'assurance grâce à l'intelligence artificielle. Notre équipe reste à votre disposition pour toute demande d'information, de partenariat ou d'assistance.",
        formTitle: "Formulaire de contact",
        formDescription: "Merci de compléter le formulaire ci-dessous. Un membre de notre équipe vous répondra dans les meilleurs délais.",
        formLabels: {
          name: "Nom complet",
          email: "Adresse e-mail professionnelle",
          subject: "Objet de la demande",
          message: "Votre message"
        },
        sendButton: "Envoyer ma demande",
        successTitle: "Message envoyé !",
        successMessage: "Nous vous répondrons dans les plus brefs délais.",
        confidentiality: {
          title: "Traitement confidentiel",
          text: "Toutes les informations transmises sont strictement confidentielles et traitées conformément à la réglementation en vigueur (RGPD / LPD)."
        },
        contactInfoTitle: "Informations de contact",
        contactMethods: {
          email: "Email",
          phone: "Téléphone",
          address: "Adresse postale"
        },
        contactInfoPlaceholders: {
          phone: "+4178 60460 81",
          address: "Federali sàrl 1530 Payerne, Suisse"
        },
        demoRequestTitle: "Demande d'analyse personnalisée",
        demoDescription: "Vous souhaitez bénéficier d'une démonstration ou poser une question spécifique à un expert de l'assurance et de l'IA ? Prenez rendez-vous avec l'un de nos spécialistes :",
        scheduleButton: "Planifier un appel"
      },
      about: {
        title: "À Propos",
        card1: {
          title: "L'analyse d'assurance qui fait sens",
          content: "ASNAP est une solution conçue pour répondre à un besoin croissant de clarté et de compréhension dans le domaine de l'assurance. Notre plateforme utilise l'intelligence artificielle pour transformer des contrats complexes en analyses accessibles et compréhensibles."
        },
        card2: {
          title: "Notre mission",
          content: "Notre mission est de démocratiser la lecture et la compréhension des contrats d'assurance grâce à l'intelligence artificielle. Nous croyons que chaque personne mérite de comprendre parfaitement ses garanties et ses droits."
        },
        card3: {
          title: "Une technologie conçue pour vous servir"
        },
        insuranceDomains: {
          naturalMedicine: "Médecine naturelle",
          hospitalization: "Hospitalisation",
          travel: "Voyage",
          outpatient: "Ambulatoire",
          accident: "Accident",
          dental: "Dentaire"
        },
        contact: {
          title: "Contact",
          text: "Pour toute question : "
        }
      },
      legal: {
        title: "Mentions légales",
        description: "Conformément à la législation en vigueur, vous trouverez ci-dessous les informations légales relatives au site asnap.ch.",
        sections: {
          editor: {
            title: "Éditeur du site",
            content: {
              name: "Nom de la société / structure",
              legalForm: "Forme juridique",
              address: "Adresse du siège social",
              registration: "Numéro d'immatriculation",
              website: "Site web"
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Société à responsabilité limitée (sàrl)",
              address: "1530 Payerne, Suisse",
              registration: "CHE-279.843.809",
              website: "asnap.ch"
            }
          },
          host: {
            title: "Hébergeur",
            content: {
              name: "Nom",
              address: "Adresse",
              phone: "Téléphone",
              website: "Site web"
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Suisse",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com"
            }
          },
          intellectualProperty: {
            title: "Propriété intellectuelle",
            content: "L'ensemble du contenu présent sur le site ASNAP (textes, images, illustrations, logos, icônes, fichiers téléchargeables, structure, code source, etc.) est la propriété exclusive d'ASNAP, sauf mention contraire explicite. Toute reproduction, représentation, modification, publication ou adaptation, intégrale ou partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable."
          },
          personalData: {
            title: "Données personnelles",
            content: "ASNAP s'engage à respecter la confidentialité des données personnelles collectées via son site et à les traiter dans le strict respect du Règlement Général sur la Protection des Données (RGPD) ou de la loi fédérale suisse sur la protection des données (LPD), selon votre pays de résidence.",
            details: {
              collected: "Données collectées : nom, adresse e-mail, documents PDF uploadés à des fins d'analyse",
              purpose: "Finalité : traitement automatique des documents d'assurance et amélioration de nos services",
              retention: "Durée de conservation : limitée au strict nécessaire",
              rights: "Droit d'accès, de rectification et de suppression : contactez-nous à [adresse email de contact RGPD]"
            }
          },
          cookies: {
            title: "Cookies",
            content: "Le site ASNAP utilise des cookies pour améliorer l'expérience utilisateur, assurer un fonctionnement technique optimal et recueillir des données anonymes de performance. Vous pouvez paramétrer vos préférences via le bandeau de consentement au premier accès."
          },
          liability: {
            title: "Responsabilité",
            content: "ASNAP fournit une aide à la lecture et à la compréhension des contrats d'assurance, sans se substituer à un conseiller ou à une compagnie d'assurance. L'utilisateur reste seul responsable des décisions prises à partir des informations générées par l'outil."
          }
        },
        contact: {
          title: "Contact",
          description: "Pour toute question ou demande d'information concernant le site asnap.ch, vous pouvez nous contacter aux adresses suivantes :",
          infoLabel: "Informations générales",
          clientServiceLabel: "Service client",
          addressLabel: "Adresse postale",
          address: "Federali sàrl\n1530 Payerne, Suisse"
        }
      }
    
    },
  },
  en: {
    translation: {
      hero: {
        title: "Are you a family head, a student, or a couple?",
        description: `Asnap leverages AI to decode your PDFs by uploading your contract, delivering clear, instant, reliable, fast, and transparent insights into your guarantees.`,
        startNow: "🔥 Start Now",
        imageAlt: "Insurance AI",
        analyzePdf: "Intelligent analysis of your insurance", 
             learnMore: "Learn More"
      },
      home: "Home",
      roadmap: "Roadmap",
      getStarted: "Get Started",
      uploadPdf: {
        title: "Upload Your PDF",
        phonePlaceholder:"Enter your phone number",
       errorNoPhone:"Please enter your phone number!",
        emailPlaceholder: "Your email address",
        fileSelectedToast: "PDF file selected!",
        pdfOnlyToast: "Only PDF files are allowed!",
        fileDeletedToast: "File deleted!",
        fileSelected: "Selected",
        dragDrop: "Drag and drop your PDF file here",
        optionalCategoriesTitle: "Make certain categories optional:",
        categories: {
          accident: "Accident",
          naturalMedicine: "Natural Medicine",
          travelInsurance: "Travel Insurance",
        },
        descriptions: {
          accident:
            "If you already benefit from private clinic coverage provided by your employer as part of the LAA, you can check this option to make the analysis of this category optional.",
          naturalMedicine:
            "If you have a complete aversion to natural medicine practices (osteopathy, acupuncture, chiropractic, Chinese medicine, homeopathy, naturopathy, etc.), you can check this option to make the analysis of this category optional.",
          travelInsurance:
            "If you do not travel outside Switzerland or already benefit from private coverage offered by another insurer (TCS, Zürich, Allianz, Generali, etc.), you can check this option to make the analysis of this category optional."
        },
        acceptConditions: {
          prefix: "I accept the",
          link: "Terms of Use",
        },
        processing: "Processing...",
        generateBenchmark: "Generate Benchmark",
        errorNoFile: "Please select a PDF file!",
        errorNoEmail: "Please enter an email address!",
        errorAgree: "You must accept the terms!",
        benchmarkSuccessToast: "Benchmark generated successfully!",
        benchmarkErrorToast: "Error generating benchmark!",
      },
      analysis: {
        sectionTitle: "A clear vision, down to the smallest details",
        content: "Asnap Premium identifies often overlooked areas: mental health, physical activity, specific situations… With tailored analysis, benefit from precise guidance based on your personal priorities.",
        premiumNote: "Today, our experts advise you directly. Tomorrow, behavioral AI will take over to further refine recommendations.",
        futureLabel: "Anticipate. Optimize. Decide with confidence.",
        futureNote: "",
        buttonText: "Access the full report(See you soon!)"
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Information:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Customer Service:",
        clientServiceEmail: "clients@asnap.ch"
      },   
       contact: {
        heroTitle: "Contact",
        heroDescription: "ASNAP simplifies reading and evaluating insurance contracts using artificial intelligence. Our team is available for any information requests, partnerships, or assistance.",
        formTitle: "Contact Form",
        formDescription: "Please complete the form below. A member of our team will respond to you as soon as possible.",
        formLabels: {
          name: "Full name",
          email: "Professional email address",
          subject: "Request subject",
          message: "Your message"
        },
        sendButton: "Send my request",
        successTitle: "Message sent!",
        successMessage: "We will respond to you as soon as possible.",
        confidentiality: {
          title: "Confidential processing",
          text: "All information transmitted is strictly confidential and processed in accordance with applicable regulations (GDPR / FADP)."
        },
        contactInfoTitle: "Contact Information",
        contactMethods: {
          email: "Email",
          phone: "Phone",
          address: "Postal address"
        },
        contactInfoPlaceholders: {
          phone: "+4178 60460 81",
          address: "Federali sàrl 1530 Payerne, Suisse"
        },
        demoRequestTitle: "Personalized Analysis Request",
        demoDescription: "Would you like a demonstration or to ask a specific question to an insurance and AI expert? Schedule a call with one of our specialists:",
        scheduleButton: "Schedule a call"
      },
      about: {
        title: "About",
        card1: {
          title: "Insurance Analysis That Makes Sense",
          content: "ASNAP is a solution designed to address a growing need for clarity and understanding in the insurance field. Our platform uses artificial intelligence to transform complex contracts into accessible and understandable analyses."
        },
        card2: {
          title: "Our Mission",
          content: "Our mission is to democratize the reading and understanding of insurance contracts through artificial intelligence. We believe that every person deserves to fully understand their coverage and rights."
        },
        card3: {
          title: "Technology Designed to Serve You"
        },
        insuranceDomains: {
          naturalMedicine: "Natural Medicine",
          hospitalization: "Hospitalization",
          travel: "Travel",
          outpatient: "Outpatient",
          accident: "Accident",
          dental: "Dental"
        },
        contact: {
          title: "Contact",
          text: "For any questions: "
        }
      },  legal: {
        title: "Legal Notice",
        author: "By Ahmed Aboulfath",
        description: "In accordance with applicable legislation, you will find below the legal information regarding the website asnap.ch.",
        sections: {
          editor: {
            title: "Website Publisher",
            content: {
              name: "Company / Organization name",
              legalForm: "Legal form",
              address: "Registered office address",
              registration: "Registration number",
              website: "Website"
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Limited liability company (LLC)",
              address: "1530 Payerne, Switzerland",
              registration: "CHE-279.843.809",
              website: "asnap.ch"
            }
          },
          host: {
            title: "Hosting Provider",
            content: {
              name: "Name",
              address: "Address",
              phone: "Phone",
              website: "Website"
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Suisse",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com"
            }
          },
          intellectualProperty: {
            title: "Intellectual Property",
            content: "All content on the ASNAP website (texts, images, illustrations, logos, icons, downloadable files, structure, source code, etc.) is the exclusive property of ASNAP, unless otherwise explicitly stated. Any reproduction, representation, modification, publication, or adaptation, in whole or in part, of these elements, by any means or process, is prohibited without prior written permission."
          },
          personalData: {
            title: "Personal Data",
            content: "ASNAP is committed to respecting the confidentiality of personal data collected through its website and processing it in strict compliance with the General Data Protection Regulation (GDPR) or the Swiss Federal Data Protection Act (FADP), depending on your country of residence.",
            details: {
              collected: "Data collected: name, email address, PDF documents uploaded for analysis purposes",
              purpose: "Purpose: automated processing of insurance documents and improvement of our services",
              retention: "Retention period: limited to what is strictly necessary",
              rights: "Right of access, rectification, and deletion: contact us at [GDPR contact email address]"
            }
          },
          cookies: {
            title: "Cookies",
            content: "The ASNAP website uses cookies to enhance user experience, ensure optimal technical functioning, and collect anonymous performance data. You can configure your preferences via the consent banner upon first access."
          },
          liability: {
            title: "Liability",
            content: "ASNAP provides assistance in reading and understanding insurance contracts without replacing an advisor or an insurance company. The user remains solely responsible for decisions made based on the information generated by the tool."
          }
        },
        contact: {
          title: "Contact",
          description: "For any questions or information requests regarding the asnap.ch website, you can contact us at the following addresses:",
          infoLabel: "General information",
          clientServiceLabel: "Customer service",
          addressLabel: "Postal address",
          address: "Federali sàrl\n1530 Payerne, Switzerland"
        }
      }
    },
  },
  it: {
    translation: {
      hero: {
        title: "Sei un capofamiglia, uno studente o una coppia?",
        description: `Asnap utilizza l'IA per decifrare i tuoi PDF caricando il tuo contratto, offrendo una lettura chiara, immediata, affidabile, veloce e trasparente delle tue garanzie.`,
        startNow: "🔥 Inizia Ora",
        imageAlt: "Insurance AI",
        analyzePdf: "Analisi intelligente delle tue assicurazioni", // Added
        withAI: "con l'IA",
        learnMore: "Scopri di Più" 
      },
      home: "Home",
      roadmap: "Percorso",
      getStarted: "Inizia",
      uploadPdf: {
        title: "Carica il tuo PDF",
        phonePlaceholder:"Inserisci il tuo numero di telefono",
        errorNoPhone:"Inserisci il tuo numero di telefono!", 
        emailPlaceholder: "Il tuo indirizzo email",
        fileSelectedToast: "File PDF selezionato!",
        pdfOnlyToast: "Sono ammessi solo file PDF!",
        fileDeletedToast: "File eliminato!",
        fileSelected: "Selezionato",
        dragDrop: "Trascina e rilascia il tuo file PDF qui",
        optionalCategoriesTitle: "Rendi facoltative alcune categorie:",
        categories: {
          accident: "Incidente",
          naturalMedicine: "Medicina Naturale",
          travelInsurance: "Assicurazione Viaggio",
        },
        descriptions: {
          accident:
            "Se già benefici di una copertura in clinica privata fornita dal tuo datore di lavoro nell'ambito della LAA, puoi selezionare questa opzione per rendere l'analisi di questa categoria facoltativa.",
          naturalMedicine:
            "Se hai una completa avversione per le pratiche di medicina naturale (osteopatia, agopuntura, chiropratica, medicina cinese, omeopatia, naturopatia, ecc.), puoi selezionare questa opzione per rendere l'analisi di questa categoria facoltativa.",
          travelInsurance:
            "Se non viaggi fuori dal territorio svizzero o se già benefici di una copertura privata offerta da un altro assicuratore (TCS, Zürich, Allianz, Generali, ecc.), puoi selezionare questa opzione per rendere l'analisi di questa categoria facoltativa."
        },
        acceptConditions: {
          prefix: "Accetto i",
          link: "Termini d'uso",
        },
        processing: "Elaborazione in corso...",
        generateBenchmark: "Genera Benchmark",
        errorNoFile: "Seleziona un file PDF!",
        errorNoEmail: "Inserisci un indirizzo email!",
        errorAgree: "Devi accettare i termini!",
        benchmarkSuccessToast: "Benchmark generato con successo!",
        benchmarkErrorToast: "Errore durante la generazione del benchmark!",
      },
      analysis: {
        sectionTitle: "Una visione chiara, fino ai minimi dettagli",
        content: "Asnap Premium identifica le aree spesso trascurate: salute mentale, attività fisica, situazioni particolari… Grazie a un’analisi su misura, beneficia di un supporto preciso, basato sulle tue priorità personali.",
        premiumNote: "Oggi, i nostri esperti ti consigliano direttamente. Domani, un’IA comportamentale prenderà il posto per affinare ulteriormente le raccomandazioni.",
        futureLabel: "Anticipa. Ottimizza. Decidi con serenità.",
        futureNote: "",
        buttonText: "Accedi al rapporto completo(A presto!)"
      },
      footer: {
        contact: "Contatti",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informazioni:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Servizio Clienti:",
        clientServiceEmail: "clients@asnap.ch"
      },
      contact: {
        heroTitle: "Contatto",
        heroDescription: "ASNAP semplifica la lettura e la valutazione dei contratti assicurativi grazie all'intelligenza artificiale. Il nostro team è a tua disposizione per qualsiasi richiesta di informazioni, partnership o assistenza.",
        formTitle: "Modulo di contatto",
        formDescription: "Si prega di compilare il modulo sottostante. Un membro del nostro team ti risponderà al più presto.",
        formLabels: {
          name: "Nome completo",
          email: "Indirizzo email professionale",
          subject: "Oggetto della richiesta",
          message: "Il tuo messaggio"
        },
        sendButton: "Invia la mia richiesta",
        successTitle: "Messaggio inviato!",
        successMessage: "Ti risponderemo al più presto.",
        confidentiality: {
          title: "Trattamento confidenziale",
          text: "Tutte le informazioni trasmesse sono strettamente riservate e trattate conformemente alla normativa vigente (GDPR / LPD)."
        },
        contactInfoTitle: "Informazioni di contatto",
        contactMethods: {
          email: "Email",
          phone: "Telefono",
          address: "Indirizzo postale"
        },
        contactInfoPlaceholders: {
          phone: "+4178 60460 81",
          address: "Federali sàrl 1530 Payerne, Suisse"
        },
        demoRequestTitle: "Richiesta di analisi personalizzata",
        demoDescription: "Desideri una dimostrazione o fare una domanda specifica a un esperto di assicurazioni e IA? Fissa un appuntamento con uno dei nostri specialisti:",
        scheduleButton: "Pianifica una chiamata"
      },
      about: {
        title: "Informazioni",
        card1: {
          title: "Analisi assicurativa che ha senso",
          content: "ASNAP è una soluzione progettata per rispondere a un crescente bisogno di chiarezza e comprensione nel campo assicurativo. La nostra piattaforma utilizza l'intelligenza artificiale per trasformare contratti complessi in analisi accessibili e comprensibili."
        },
        card2: {
          title: "La nostra missione",
          content: "La nostra missione è democratizzare la lettura e la comprensione dei contratti assicurativi grazie all'intelligenza artificiale. Crediamo che ogni persona meriti di comprendere appieno le proprie coperture e diritti."
        },
        card3: {
          title: "Tecnologia progettata per servirti"
        },
        insuranceDomains: {
          naturalMedicine: "Medicina naturale",
          hospitalization: "Ospedalizzazione",
          travel: "Viaggio",
          outpatient: "Ambulatoriale",
          accident: "Incidente",
          dental: "Dentale"
        },
        contact: {
          title: "Contatto",
          text: "Per qualsiasi domanda: "
        }
      },
      legal: {
        title: "Note Legali",
        description: "Conformemente alla legislazione vigente, di seguito troverai le informazioni legali relative al sito asnap.ch.",
        sections: {
          editor: {
            title: "Editore del sito",
            content: {
              name: "Nome della società / struttura",
              legalForm: "Forma giuridica",
              address: "Indirizzo della sede legale",
              registration: "Numero di registrazione",
              website: "Sito web"
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Società a responsabilità limitata (sàrl)",
              address: "1530 Payerne, Svizzera",
              registration: "CHE-279.843.809",
              website: "asnap.ch"
            }
          },
          host: {
            title: "Hosting",
            content: {
              name: "Nome",
              address: "Indirizzo",
              phone: "Telefono",
              website: "Sito web"
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Suisse",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com"
            }
          },
          intellectualProperty: {
            title: "Proprietà intellettuale",
            content: "Tutti i contenuti presenti sul sito ASNAP (testi, immagini, illustrazioni, loghi, icone, file scaricabili, struttura, codice sorgente, ecc.) sono di proprietà esclusiva di ASNAP, salvo esplicita menzione contraria. È vietata qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o adattamento, totale o parziale, di questi elementi, con qualsiasi mezzo o procedura, senza autorizzazione scritta preventiva."
          },
          personalData: {
            title: "Dati personali",
            content: "ASNAP si impegna a rispettare la riservatezza dei dati personali raccolti tramite il suo sito e a trattarli in stretta conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) o alla legge federale svizzera sulla protezione dei dati (LPD), a seconda del paese di residenza.",
            details: {
              collected: "Dati raccolti: nome, indirizzo email, documenti PDF caricati a fini di analisi",
              purpose: "Finalità: elaborazione automatica dei documenti assicurativi e miglioramento dei nostri servizi",
              retention: "Periodo di conservazione: limitato allo stretto necessario",
              rights: "Diritto di accesso, rettifica e cancellazione: contattaci all'indirizzo email [email di contatto GDPR]"
            }
          },
          cookies: {
            title: "Cookie",
            content: "Il sito ASNAP utilizza cookie per migliorare l'esperienza utente, garantire un funzionamento tecnico ottimale e raccogliere dati di performance anonimi. Puoi configurare le tue preferenze tramite il banner di consenso al primo accesso."
          },
          liability: {
            title: "Responsabilità",
            content: "ASNAP fornisce assistenza nella lettura e comprensione dei contratti assicurativi senza sostituire un consulente o una compagnia assicurativa. L'utente rimane l'unico responsabile delle decisioni prese sulla base delle informazioni generate dallo strumento."
          }
        },
        contact: {
          title: "Contatto",
          description: "Per qualsiasi domanda o richiesta di informazioni riguardanti il sito asnap.ch, puoi contattarci ai seguenti indirizzi:",
          infoLabel: "Informazioni generali",
          clientServiceLabel: "Servizio clienti",
          addressLabel: "Indirizzo postale",
          address: "Federali sàrl\n1530 Payerne, Svizzera"
        }
      }
    },
  },
  de: {
    translation: {
      hero: {
        title: "Sind Sie Familienoberhaupt, Student oder ein Paar?",
        description: `Asnap nutzt KI, um Ihre PDFs zu entschlüsseln, indem Sie Ihren Vertrag hochladen und eine klare, sofortige, zuverlässige, schnelle und transparente Analyse Ihrer Garantien erhalten.`,
        startNow: "🔥 Jetzt starten",
        imageAlt: "Insurance AI",
        analyzePdf: "Intelligente Analyse Ihrer Versicherungen", // Added
       learnMore: "Mehr Erfahren"
      },
      home: "Startseite",
      roadmap: "Fahrplan",
      getStarted: "Loslegen",
      uploadPdf: {
        title: "Laden Sie Ihr PDF hoch",
        phonePlaceholder:"Geben Sie Ihre Telefonnummer ein",
        errorNoPhone:"ughiu",
        emailPlaceholder: "Ihre E-Mail-Adresse",
        fileSelectedToast: "PDF-Datei ausgewählt!",
        pdfOnlyToast: "Nur PDF-Dateien sind erlaubt!",
        fileDeletedToast: "Datei gelöscht!",
        fileSelected: "Ausgewählt",
        dragDrop: "Ziehen Sie Ihre PDF-Datei hierher",
        optionalCategoriesTitle: "Machen Sie bestimmte Kategorien optional:",
        categories: {
          accident: "Unfall",
          naturalMedicine: "Naturmedizin",
          travelInsurance: "Reiseversicherung",
        },
        descriptions: {
          accident:
            "Wenn Sie bereits über eine private Klinikabdeckung, die Ihnen von Ihrem Arbeitgeber im Rahmen der LAA bereitgestellt wird, verfügen, können Sie diese Option aktivieren, um die Analyse dieser Kategorie optional zu machen.",
          naturalMedicine:
            "Wenn Sie eine völlige Abneigung gegen naturheilkundliche Praktiken (Osteopathie, Akupunktur, Chiropraktik, chinesische Medizin, Homöopathie, Naturheilkunde etc.) haben, können Sie diese Option aktivieren, um die Analyse dieser Kategorie optional zu machen.",
          travelInsurance:
            "Wenn Sie nicht außerhalb der Schweiz reisen oder bereits von einem anderen Versicherer (TCS, Zürich, Allianz, Generali, etc.) eine private Abdeckung erhalten, können Sie diese Option aktivieren, um die Analyse dieser Kategorie optional zu machen."
        },
        acceptConditions: {
          prefix: "Ich akzeptiere die",
          link: "Nutzungsbedingungen",
        },
        processing: "Verarbeitung läuft...",
        generateBenchmark: "Benchmark erstellen",
        errorNoFile: "Bitte wählen Sie eine PDF-Datei aus!",
        errorNoEmail: "Bitte geben Sie eine E-Mail-Adresse ein!",
        errorAgree: "Sie müssen die Bedingungen akzeptieren!",
        benchmarkSuccessToast: "Benchmark erfolgreich erstellt!",
        benchmarkErrorToast: "Fehler beim Erstellen des Benchmarks!",
      },
      analysis: {
        sectionTitle: "Eine klare Sicht, bis ins kleinste Detail",
        content: "Asnap Premium erkennt oft übersehene Bereiche: psychische Gesundheit, körperliche Aktivität, besondere Situationen… Mit maßgeschneiderter Analyse profitieren Sie von präziser Unterstützung, basierend auf Ihren persönlichen Prioritäten.",
        premiumNote: "Heute beraten Sie unsere Experten direkt. Morgen wird eine verhaltensbasierte KI die Empfehlungen noch weiter verfeinern.",
        futureLabel: "Vorausschauen. Optimieren. Mit Zuversicht entscheiden.",
        futureNote: "",
        buttonText: "Zugang zum vollständigen Bericht(Bis bald!)"
      },
      footer: {
        contact: "Kontakt",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informationen:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Kundendienst:",
        clientServiceEmail: "clients@asnap.ch"
      },
       contact: {
        heroTitle: "Kontakt",
        heroDescription: "ASNAP vereinfacht das Lesen und Bewerten von Versicherungsverträgen durch künstliche Intelligenz. Unser Team steht Ihnen für alle Informationsanfragen, Partnerschaften oder Unterstützung zur Verfügung.",
        formTitle: "Kontaktformular",
        formDescription: "Bitte füllen Sie das folgende Formular aus. Ein Mitglied unseres Teams wird sich so schnell wie möglich bei Ihnen melden.",
        formLabels: {
          name: "Vollständiger Name",
          email: "Berufliche E-Mail-Adresse",
          subject: "Betreff der Anfrage",
          message: "Ihre Nachricht"
        },
        sendButton: "Anfrage senden",
        successTitle: "Nachricht gesendet!",
        successMessage: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
        confidentiality: {
          title: "Vertrauliche Bearbeitung",
          text: "Alle übermittelten Informationen sind streng vertraulich und werden gemäß den geltenden Vorschriften (DSGVO / DSG) verarbeitet."
        },
        contactInfoTitle: "Kontaktinformationen",
        contactMethods: {
          email: "E-Mail",
          phone: "Telefon",
          address: "Postanschrift"
        },
        contactInfoPlaceholders: {
          phone: "+4178 60460 81",
          address: "Federali sàrl 1530 Payerne, Suisse"
        },
        demoRequestTitle: "Anfrage für personalisierte Analyse",
        demoDescription: "Möchten Sie eine Demonstration erhalten oder einem Experten für Versicherungen und KI eine spezifische Frage stellen? Vereinbaren Sie einen Termin mit einem unserer Spezialisten:",
        scheduleButton: "Anruf planen"
      },
      about: {
        title: "Über",
        card1: {
          title: "Versicherungsanalyse mit Sinn",
          content: "ASNAP ist eine Lösung, die entwickelt wurde, um dem wachsenden Bedarf an Klarheit und Verständnis im Versicherungsbereich gerecht zu werden. Unsere Plattform nutzt künstliche Intelligenz, um komplexe Verträge in zugängliche und verständliche Analysen umzuwandeln."
        },
        card2: {
          title: "Unsere Mission",
          content: "Unsere Mission ist es, das Lesen und Verstehen von Versicherungsverträgen durch künstliche Intelligenz zu demokratisieren. Wir glauben, dass jeder Mensch seine Deckung und Rechte vollständig verstehen sollte."
        },
        card3: {
          title: "Technologie, die Ihnen dient"
        },
        insuranceDomains: {
          naturalMedicine: "Naturmedizin",
          hospitalization: "Hospitalisierung",
          travel: "Reise",
          outpatient: "Ambulant",
          accident: "Unfall",
          dental: "Zahn"
        },
        contact: {
          title: "Kontakt",
          text: "Bei Fragen: "
        }
      },
      legal: {
        title: "Impressum",
        author: "Von Ahmed Aboulfath",
        description: "Gemäß der geltenden Gesetzgebung finden Sie unten die rechtlichen Informationen zur Website asnap.ch.",
        sections: {
          editor: {
            title: "Herausgeber der Website",
            content: {
              name: "Name der Firma / Organisation",
              legalForm: "Rechtsform",
              address: "Adresse des Hauptsitzes",
              registration: "Registrierungsnummer",
              website: "Website"
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Gesellschaft mit beschränkter Haftung (GmbH)",
              address: "1530 Payerne, Schweiz",
              registration: "CHE-279.843.809",
              website: "asnap.ch"
            }
          },
          host: {
            title: "Hosting-Anbieter",
            content: {
              name: "Name",
              address: "Adresse",
              phone: "Telefon",
              website: "Website"
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Suisse",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com"
            }
          },
          intellectualProperty: {
            title: "Geistiges Eigentum",
            content: "Der gesamte Inhalt auf der ASNAP-Website (Texte, Bilder, Illustrationen, Logos, Symbole, herunterladbare Dateien, Struktur, Quellcode usw.) ist, sofern nicht ausdrücklich anders angegeben, ausschließliches Eigentum von ASNAP. Jede Vervielfältigung, Darstellung, Änderung, Veröffentlichung oder Anpassung dieser Elemente, ganz oder teilweise, mit welchen Mitteln oder Verfahren auch immer, ist ohne vorherige schriftliche Genehmigung untersagt."
          },
          personalData: {
            title: "Personenbezogene Daten",
            content: "ASNAP verpflichtet sich, die Vertraulichkeit der über seine Website gesammelten personenbezogenen Daten zu respektieren und sie streng im Einklang mit der Datenschutz-Grundverordnung (DSGVO) oder dem schweizerischen Bundesgesetz über den Datenschutz (DSG), je nach Ihrem Wohnsitzland, zu verarbeiten.",
            details: {
              collected: "Gesammelte Daten: Name, E-Mail-Adresse, zu Analysezwecken hochgeladene PDF-Dokumente",
              purpose: "Zweck: automatische Verarbeitung von Versicherungsdokumenten und Verbesserung unserer Dienstleistungen",
              retention: "Aufbewahrungsdauer: auf das absolut Notwendige beschränkt",
              rights: "Recht auf Zugang, Berichtigung und Löschung: kontaktieren Sie uns unter [DSGVO-Kontakt-E-Mail-Adresse]"
            }
          },
          cookies: {
            title: "Cookies",
            content: "Die ASNAP-Website verwendet Cookies, um die Benutzererfahrung zu verbessern, eine optimale technische Funktion zu gewährleisten und anonyme Leistungsdaten zu sammeln. Sie können Ihre Präferenzen beim ersten Zugriff über das Einwilligungsbanner konfigurieren."
          },
          liability: {
            title: "Haftung",
            content: "ASNAP bietet Hilfe beim Lesen und Verstehen von Versicherungsverträgen, ohne einen Berater oder ein Versicherungsunternehmen zu ersetzen. Der Nutzer bleibt allein verantwortlich für Entscheidungen, die auf den durch das Tool generierten Informationen basieren."
          }
        },
        contact: {
          title: "Kontakt",
          description: "Bei Fragen oder Informationsanfragen bezüglich der Website asnap.ch können Sie uns unter den folgenden Adressen kontaktieren:",
          infoLabel: "Allgemeine Informationen",
          clientServiceLabel: "Kundendienst",
          addressLabel: "Postanschrift",
          address: "Federali sàrl\n1530 Payerne, Schweiz"
        }
      }
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "fr",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
