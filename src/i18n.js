import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      hero: {
        title: "Êtes-vous un chef de famille, un étudiant, en couple?",
        description: `     Uploadez vos documents PDF et laissez notre IA avancée les analyser, 
            extraire les informations clés et répondre à toutes vos questions.`,
        startNow: "🔥 Démarrer Maintenant",
        imageAlt: "Assurance AI",
        analyzePdf: "Analysez vos PDF", // Added
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
        sectionTitle: "Votre tranquillité d’esprit n’est pas encore atteinte",
        content: "Explorez en profondeur vos critères uniques tels que la santé mentale, la forme physique, et les besoins particuliers. Accédez à l’analyse premium pour révéler ces facettes cachées de votre personnalité, et bénéficier d’astuces et de conseils personnalisés pour votre développement personnel.",
        premiumLabel: "Analyse premium :",
        premiumNote: "Pour l’instant, cela consiste en un conseil avec un expert de l’entreprise. Par la suite, ce sera un conseil via IA.",
        buttonText: "Accéder au rapport complet",
        buttonNote: "(Analyse PREMIUM : via Calendly ou autre, payant CHF 20.- / 15)"
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informations :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Service client :",
        clientServiceEmail: "clients@asnap.ch"
      }
    },
  },
  en: {
    translation: {
      hero: {
        title: "Are you a family head, a student, or a couple?",
        description: `Upload your PDF documents and let our advanced AI analyze them, extract key information, and answer all your questions.`,
        startNow: "🔥 Start Now",
        imageAlt: "Insurance AI",
        analyzePdf: "Analyze your PDFs", // Added
        withAI: "with AI",
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
        sectionTitle: "Your peace of mind is not yet achieved",
        content: "Dive deep into your unique criteria such as mental health, physical fitness, and special needs. Access premium analysis to uncover hidden facets of your personality and benefit from personalized tips and advice for your personal development.",
        premiumLabel: "Premium Analysis:",
        premiumNote: "Currently, this consists of a consultation with a company expert. Later, it will be an AI consultation.",
        buttonText: "Access the full report",
        buttonNote: "(PREMIUM Analysis: via Calendly or other, costing CHF 20.- / 15)"
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Information:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Customer Service:",
        clientServiceEmail: "clients@asnap.ch"
      }
    },
  },
  it: {
    translation: {
      hero: {
        title: "Sei un capofamiglia, uno studente o una coppia?",
        description: `Carica i tuoi documenti PDF e lascia che la nostra IA avanzata li analizzi, estragga le informazioni chiave e risponda a tutte le tue domande.`,
        startNow: "🔥 Inizia Ora",
        imageAlt: "Insurance AI",
        analyzePdf: "Analizza i tuoi PDF", // Added
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
        sectionTitle: "La tua tranquillità non è ancora raggiunta",
        content: "Esplora a fondo i tuoi criteri unici come salute mentale, forma fisica e bisogni speciali. Accedi all'analisi premium per rivelare questi aspetti nascosti della tua personalità e beneficiare di consigli personalizzati per il tuo sviluppo personale.",
        premiumLabel: "Analisi premium:",
        premiumNote: "Al momento, consiste in una consulenza con un esperto dell'azienda. In seguito, sarà una consulenza tramite IA.",
        buttonText: "Accedi al rapporto completo",
        buttonNote: "(Analisi PREMIUM: tramite Calendly o altro, a pagamento CHF 20.- / 15)"
      },
      footer: {
        contact: "Contatti",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informazioni:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Servizio Clienti:",
        clientServiceEmail: "clients@asnap.ch"
      }
    },
  },
  de: {
    translation: {
      hero: {
        title: "Sind Sie Familienoberhaupt, Student oder ein Paar?",
        description: `Laden Sie Ihre PDF-Dokumente hoch und lassen Sie unsere fortschrittliche KI sie analysieren, wichtige Informationen extrahieren und alle Ihre Fragen beantworten.`,
        startNow: "🔥 Jetzt starten",
        imageAlt: "Insurance AI",
        analyzePdf: "Analysieren Sie Ihre PDFs", // Added
        withAI: "mit KI",
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
        sectionTitle: "Ihr Seelenfrieden ist noch nicht erreicht",
        content: "Erkunden Sie Ihre einzigartigen Kriterien wie mentale Gesundheit, körperliche Fitness und besondere Bedürfnisse. Greifen Sie auf die Premium-Analyse zu, um verborgene Facetten Ihrer Persönlichkeit aufzudecken und von personalisierten Tipps und Ratschlägen für Ihre persönliche Entwicklung zu profitieren.",
        premiumLabel: "Premium-Analyse:",
        premiumNote: "Derzeit besteht diese aus einer Beratung mit einem Firmenexperten. Später wird es eine Beratung via KI sein.",
        buttonText: "Zugriff auf den vollständigen Bericht",
        buttonNote: "(PREMIUM-Analyse: via Calendly oder ähnlich, kostenpflichtig CHF 20.- / 15)"
      },
      footer: {
        contact: "Kontakt",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informationen:",
        infoEmail: "info@asnap",
        clientServiceLabel: "Kundendienst:",
        clientServiceEmail: "clients@asnap.ch"
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
