import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      home2: {
        title: "Accueil",
      },
      benchmarkReport: {
        title: "Résultats du Benchmark",
        description: "Votre analyse de couverture détaillée",
        overallScore: "Score global de couverture",
        categoryDetails: "Détails par catégorie",
        category: "Catégorie",
        evaluation: "Évaluation",
        analyzeAnother: "Analyser un autre document",
        medals: {
          gold: "Or",
          silver: "Argent",
          bronze: "Bronze",
        },
      },
      hero: {
        title: "Êtes-vous un chef de famille, un étudiant, en couple ?",
        description: `Asnap utilise l’IA pour décrypter vos polices d’assurance. Importez votre police ou contrat et obtenez immédiatement une vue claire, précise et transparente de vos prestations.`,
        startNow: "🔥 Analysez votre contrat en 1 clic",
        imageAlt: "Assurance AI",
        analyzePdf: "Analyse intelligente de votre assurance",
        withAI: "avec l'IA",
        learnMore: "En Savoir Plus",
      },
      home: "Accueil",
      roadmap: "Feuille de route",
      getStarted: "Commencer",
      uploadPdf: {
        title: "Chargez votre contrat d’assurance",
        phonePlaceholder: "Entrez votre numéro de téléphone",
        errorNoPhone: "Veuillez entrer votre numéro de téléphone !",
        emailPlaceholder: "Entrez votre adresse email",
        fileSelectedToast: "Fichier PDF sélectionné !",
        pdfOnlyToast: "Seuls les fichiers PDF sont autorisés !",
        fileDeletedToast: "Fichier supprimé !",
        fileSelected: "Sélectionné",
        dragDrop: "Glissez votre document ici",
        optionalCategoriesTitle: "Rendre facultatives certaines catégories :",
        clickToBrowse: "ou cliquez pour parcourir",
        choice: "1 PDF ou jusqu'à 4 images JPEG/HEIC",
        categories: {
          accident: "Accident",
          naturalMedicine: "Médecine naturelle",
          travelInsurance: "Assurance voyage",
        },
        descriptions: {
          accident:
            "Si vous bénéficiez déjà d’une couverture en clinique privée fournie par votre employeur dans le cadre de la LAA, vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative.",
          naturalMedicine:
            "Si vous avez une aversion complète pour les pratiques de médecine naturelle (ostéopathie, acupuncture, chiropractie, médecine chinoise, homéopathie, naturopathie, etc.), vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative.",
          travelInsurance:
            "Si vous ne voyagez pas hors du territoire suisse ou si vous bénéficiez déjà d’une couverture privée offerte par un autre assureur (TCS, Zürich, Allianz, Generali, etc.), vous pouvez cocher cette option pour rendre l’analyse de cette catégorie facultative.",
        },
        acceptConditions: {
          prefix: "J'accepte les",
          link: "Conditions d'utilisation",
        },
        processing: "Traitement en cours...",
        generateBenchmark: "Obtenir mon analyse",
        errorNoFile: "Veuillez sélectionner un fichier PDF !",
        errorNoEmail: "Veuillez entrer une adresse e-mail !",
        errorAgree: "Vous devez accepter les conditions !",
        benchmarkSuccessToast: "Votre diagnostic des couvertures généré avec succès !",
        benchmarkErrorToast: "Erreur lors de la génération de votre diagnostic des couvertures !",
      },
      analysis: {
        sectionTitle: "Une vision claire, jusque dans les moindres détails",
        content: "Asnap Premium met en lumière les zones d’ombre souvent ignorées : santé mentale, activité physique, situations particulières… Grâce à une analyse personnalisée, vous profitez d’un accompagnement précis, aligné sur vos priorités.",
        premiumNote: "Aujourd’hui, nos experts vous conseillent directement. Demain, une IA comportementale prendra le relais pour affiner encore davantage les recommandations.",
        futureLabel: "90 % des gens découvrent trop tard que leur assurance ne couvre pas l’essentiel. Ne prenez pas ce risque.",
        futureLabelpart1: "90 % des gens découvrent trop tard que leur assurance ne couvre pas l’essentiel.",
        futureLabelpart2: "Ne prenez pas ce risque.",
        futureNote: "",
        buttonText: "Accéder au rapport complet",
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informations :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Service client :",
        clientServiceEmail: "clients@asnap.ch",
      },
      contact: {
        heroTitle: "Contact",
        heroDescription: "ASNAP simplifie la lecture et l'évaluation des contrats d'assurance grâce à l'intelligence artificielle. Notre équipe reste à votre disposition pour toute demande d'information, de partenariat ou d'assistance.",
        formTitle: "Formulaire de contact",
        formDescription: "Merci de compléter le formulaire ci-dessous. Un membre de notre équipe vous répondra dans les meilleurs délais.",
        formLabels: {
          name: "Nom complet",
          email: "Adresse e-mail",
          emailPlaceholder: "Entrez votre adresse email",
          subject: "Objet de la demande",
          message: "Votre message",
          phonePlaceholder: "Entrez votre numéro de téléphone",
        },
        sendButton: "Envoyer ma demande",
        successTitle: "Message envoyé !",
        successMessage: "Nous vous répondrons dans les plus brefs délais.",
        confidentiality: {
          title: "Traitement confidentiel",
          text: "Toutes les informations transmises sont strictement confidentielles et traitées conformément à la réglementation en vigueur (RGPD / LPD).",
        },
        contactInfoTitle: "Informations de contact",
        contactMethods: {
          email: "Email",
          phone: "Téléphone",
          address: "Adresse postale",
        },
        contactInfoPlaceholders: {
          phone: "+41 78 604 60 81",
          address: "Federali sàrl 1530 Payerne, Suisse",
        },
        demoRequestTitle: "Demande d'analyse personnalisée",
        demoDescription: "Vous souhaitez bénéficier d'une démonstration ou poser une question spécifique à un expert de l'assurance et de l'IA ? Prenez rendez-vous avec l'un de nos spécialistes :",
        scheduleButton: "Appelez maintenant",
      },
      about: {
        title: "À propos",
        card1: {
          title: "L’analyse d’assurance qui a du sens",
          content: "ASNAP simplifie vos contrats d’assurance grâce à l’intelligence artificielle. Importez votre police d'assurance ou votre contrat et obtenez en quelques secondes une lecture claire, fiable et compréhensible de vos couvertures et de vos prestations. Notre plateforme transforme des contrats complexes en analyses simples, lisibles et accessibles.",
        },
        card2: {
          title: "Notre mission",
          content: "Notre mission est de rendre l’assurance compréhensible, pour toutes et tous. Chez ASNAP, nous voulons démocratiser l’accès à l’information en simplifiant la lecture des polices d’assurance. Chacun·e mérite de comprendre ses prestations et couvertures, sans jargon, ni zones d’ombre.",
        },
        card3: {
          title: "Une technologie conçue pour vous servir",
        },
        insuranceDomains: {
          naturalMedicine: "Médecine naturelle",
          hospitalization: "Hospitalisation",
          travel: "Voyage",
          outpatient: "Ambulatoire",
          accident: "Accident",
          dental: "Dentaire",
        },
        contact: {
          title: "Contact",
          text: "Pour toute question : ",
        },
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
              website: "Site web",
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Société à responsabilité limitée (sàrl)",
              address: "1530 Payerne, Suisse",
              registration: "CHE-279.843.809",
              website: "asnap.ch",
            },
          },
          host: {
            title: "Hébergeur",
            content: {
              name: "Nom",
              address: "Adresse",
              phone: "Téléphone",
              website: "Site web",
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Suisse",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com",
            },
          },
          intellectualProperty: {
            title: "Propriété intellectuelle",
            content: "L'ensemble du contenu présent sur le site ASNAP (textes, images, illustrations, logos, icônes, fichiers téléchargeables, structure, code source, etc.) est la propriété exclusive d'ASNAP, sauf mention contraire explicite. Toute reproduction, représentation, modification, publication ou adaptation, intégrale ou partielle, de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable.",
          },
          personalData: {
            title: "Données personnelles",
            content: "ASNAP s'engage à respecter la confidentialité des données personnelles collectées via son site et à les traiter dans le strict respect du Règlement Général sur la Protection des Données (RGPD) ou de la loi fédérale suisse sur la protection des données (LPD), selon votre pays de résidence.",
            details: {
              collected: "Données collectées : nom, adresse e-mail, documents PDF uploadés à des fins d'analyse",
              purpose: "Finalité : traitement automatique des documents d'assurance et amélioration de nos services",
              retention: "Durée de conservation : limitée au strict nécessaire",
              rights: "Droit d'accès, de rectification et de suppression : contactez-nous à [adresse email de contact RGPD]",
            },
          },
          cookies: {
            title: "Cookies",
            content: "Le site ASNAP utilise des cookies pour améliorer l'expérience utilisateur, assurer un fonctionnement technique optimal et recueillir des données anonymes de performance. Vous pouvez paramétrer vos préférences via le bandeau de consentement au premier accès.",
          },
          liability: {
            title: "Responsabilité",
            content: "ASNAP fournit une aide à la lecture et à la compréhension des contrats d'assurance, sans se substituer à un conseiller ou à une compagnie d'assurance. L'utilisateur reste seul responsable des décisions prises à partir des informations générées par l'outil.",
          },
        },
        contact: {
          title: "Contact",
          description: "Pour toute question ou demande d'information concernant le site asnap.ch, vous pouvez nous contacter aux adresses suivantes :",
          infoLabel: "Informations générales",
          clientServiceLabel: "Service client",
          addressLabel: "Adresse postale",
          address: "Federali sàrl\n1530 Payerne, Suisse",
        },
      },
      privacy: {
        title: "Politique de Confidentialité",
        introduction: {
          title: "Introduction",
          content: "Chez ASNAP, la confidentialité de vos données est une priorité absolue. Cette politique de confidentialité a pour objectif de vous informer de manière claire et transparente sur la manière dont nous collectons, utilisons, stockons et protégeons vos données personnelles lorsque vous utilisez notre plateforme.",
        },
        about: {
          title: "Qui sommes-nous ?",
          content: "ASNAP est un outil digital basé sur l'intelligence artificielle, permettant aux utilisateurs d'analyser automatiquement leur contrat d'assurance santé à partir d'un simple fichier PDF. L'objectif est de fournir une évaluation claire et simplifiée de la couverture santé.",
        },
        dataCollected: {
          title: "Données personnelles collectées",
          content: {
            intro: "Lorsque vous utilisez ASNAP, nous pouvons collecter les données suivantes :",
            identification: "<strong>Données d'identification</strong> : nom, prénom, adresse e-mail, numéro de téléphone (si fournis volontairement)",
            documents: "<strong>Données contenues dans les documents téléversés</strong> : informations présentes dans votre contrat d'assurance PDF",
            technical: "<strong>Données techniques</strong> : adresse IP, type de navigateur, système d'exploitation, données de navigation",
            usage: "<strong>Données d'utilisation</strong> : fréquence d'utilisation de l'outil, clics, pages visitées, durée de session",
          },
        },
        purposes: {
          title: "Finalités du traitement",
          content: {
            intro: "Vos données sont collectées dans le but de :",
            analysis: "Fournir une analyse personnalisée de votre contrat d'assurance santé",
            improvement: "Améliorer la qualité et la précision de notre outil d'intelligence artificielle",
            support: "Répondre à vos demandes ou questions via notre service client",
            compliance: "Respecter nos obligations légales et réglementaires",
          },
        },
        storage: {
          title: "Stockage et sécurité des données",
          content: "Vos données sont stockées sur des serveurs sécurisés situés dans l'Union européenne. Nous mettons en œuvre des mesures techniques et organisationnelles pour protéger vos données contre toute perte, accès non autorisé ou divulgation. Les fichiers PDF analysés ne sont pas conservés au-delà de la durée nécessaire à l'analyse, sauf si vous donnez votre accord explicite pour un usage prolongé.",
        },
        sharing: {
          title: "Partage des données",
          content: "Nous ne vendons, louons ou échangeons aucune donnée personnelle avec des tiers. Des prestataires de services techniques peuvent être amenés à traiter certaines données pour notre compte (hébergement, maintenance, analytics), dans le strict respect de cette politique et sous contrat de confidentialité.",
        },
        retention: {
          title: "Durée de conservation",
          content: {
            contact: "<strong>Données de contact</strong> : conservées 3 ans à compter du dernier contact actif",
            documents: "<strong>Données issues des fichiers PDF</strong> : supprimées automatiquement après l'analyse, sauf consentement contraire",
            technical: "<strong>Données techniques</strong> : conservées 13 mois maximum à des fins statistiques",
          },
        },
        rights: {
          title: "Vos droits",
          content: {
            intro: "Conformément à la réglementation en vigueur (RGPD), vous disposez des droits suivants :",
            access: "Droit d'accès, de rectification et d'effacement de vos données personnelles",
            restriction: "Droit de limitation ou d'opposition au traitement",
            portability: "Droit à la portabilité des données",
            consent: "Droit de retirer votre consentement à tout moment",
            contact: "Pour exercer ces droits, contactez-nous à : <0>privacy@asnap.com</0>",
          },
        },
        cookies: {
          title: "Cookies",
          content: "ASNAP utilise des cookies à des fins de mesure d'audience, de sécurité et d'amélioration de l'expérience utilisateur. Pour en savoir plus ou modifier vos préférences, veuillez consulter notre <0>Politique de cookies</0>.",
        },
        updates: {
          title: "Modifications de la politique",
          content: "Cette politique de confidentialité peut être mise à jour à tout moment. Toute modification importante vous sera communiquée par e-mail ou sur notre site web.",
        },
        contactSection: {
          title: "Contactez-nous",
          content: "Pour toute question relative à cette politique de confidentialité, n'hésitez pas à nous contacter.",
          technicalSupport: {
            label: "Support technique :",
            email: "info@asnap",
          },
          dataProtection: {
            label: "Protection des données :",
            email: "clients@asnap.ch",
          },
          headquarters: {
            label: "Siège social :",
            address: "Rue de l'Innovation 15, 1200 Genève, Suisse",
          },
        },
        footer: {
          copyright: "© {{year}} ASNAP - Tous droits réservés",
        },
      },
    },
  },
  en: {
    translation: {
      home2: {
        title: "Home",
      },
      benchmarkReport: {
        title: "Benchmark Results",
        description: "Your detailed coverage analysis",
        overallScore: "Overall Coverage Score",
        categoryDetails: "Category Details",
        category: "Category",
        evaluation: "Evaluation",
        analyzeAnother: "Analyze another document",
        medals: {
          gold: "Gold",
          silver: "Silver",
          bronze: "Bronze",
        },
      },
      hero: {
        title: "Are you a family head, a student, or a couple ?",
        description: `Asnap uses AI to decipher your insurance policies. Upload your policy or contract and instantly get a clear, precise, and transparent overview of your benefits.`,
        startNow: "🔥 Analyze your contract in 1 click",
        imageAlt: "Insurance AI",
        analyzePdf: "Smart Analysis of Your Insurance",
        learnMore: "Learn More",
      },
      home: "Home",
      roadmap: "Roadmap",
      getStarted: "Get Started",
      uploadPdf: {
        title: "Upload your insurance policy",
        phonePlaceholder: "Enter your phone number",
        errorNoPhone: "Please enter your phone number !",
        emailPlaceholder: "Enter your email address",
        fileSelectedToast: "PDF file selected !",
        pdfOnlyToast: "Only PDF files are allowed !",
        fileDeletedToast: "File deleted !",
        fileSelected: "Selected",
        dragDrop: "Drag your document here",
        optionalCategoriesTitle: "Make certain categories optional :",
        clickToBrowse: "or click to browse",
        choice: "1 PDF or up to 4 JPEG/HEIC images",
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
            "If you do not travel outside Switzerland or already benefit from private coverage offered by another insurer (TCS, Zürich, Allianz, Generali, etc.), you can check this option to make the analysis of this category optional.",
        },
        acceptConditions: {
          prefix: "I accept the",
          link: "Terms of Use",
        },
        processing: "Processing...",
        generateBenchmark: "Get my analysis",
        errorNoFile: "Please select a PDF file !",
        errorNoEmail: "Please enter an email address !",
        errorAgree: "You must accept the terms !",
        benchmarkSuccessToast: "Benchmark generated successfully !",
        benchmarkErrorToast: "Error generating your coverage diagnostic !",
      },
      analysis: {
        sectionTitle: "A clear vision, down to the finest details",
        content: "Asnap Premium highlights often overlooked grey areas : mental health, physical activity, special circumstances… With personalized analysis, you benefit from precise guidance tailored to your priorities.",
        premiumNote: "Today, our experts advise you directly. Tomorrow, behavioral AI takes over to further refine recommendations.",
        futureLabel: "90% of people find out too late that their insurance doesn't cover the essentials. Don't take that risk.",
        futureLabelpart1: "90% of people find out too late that their insurance doesn't cover the essentials.",
        futureLabelpart2: "Don't take that risk.",
        futureNote: "",
        buttonText: "Access the full report",
      },
      footer: {
        contact: "Contact",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Information :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Customer Service :",
        clientServiceEmail: "clients@asnap.ch",
      },
      contact: {
        heroTitle: "Contact",
        heroDescription: "ASNAP simplifies reading and evaluating insurance contracts using artificial intelligence. Our team is available for any information requests, partnerships, or assistance.",
        formTitle: "Contact Form",
        formDescription: "Please complete the form below. A member of our team will respond to you as soon as possible.",
        formLabels: {
          name: "Full name",
          email: " email address",
          emailPlaceholder: "Enter your email address",
          subject: "Request subject",
          message: "Your message",
          phonePlaceholder: "Enter your phone number",
        },
        sendButton: "Send my request",
        successTitle: "Message sent !",
        successMessage: "We will respond to you as soon as possible.",
        confidentiality: {
          title: "Confidential processing",
          text: "All information transmitted is strictly confidential and processed in accordance with applicable regulations (GDPR / FADP).",
        },
        contactInfoTitle: "Contact Information",
        contactMethods: {
          email: "Email",
          phone: "Phone",
          address: "Postal address",
        },
        contactInfoPlaceholders: {
          phone: "+41 78 604 60 81",
          address: "Federali sàrl 1530 Payerne, Switzerland",
        },
        demoRequestTitle: "Personalized Analysis Request",
        demoDescription: "Would you like a demonstration or to ask a specific question to an insurance and AI expert ? Call one of our specialists now :",
        scheduleButton: "Call now",
      },
      about: {
        title: "About",
        card1: {
          title: "Insurance Analysis That Makes Sense",
          content: "ASNAP simplifies your insurance contracts using AI. Upload your policy and get a clear, reliable, and understandable breakdown of your coverages and benefits within seconds. Our platform transforms complex agreements into simple, readable, and accessible analyses.",
        },
        card2: {
          title: "Our Mission",
          content: "Our mission is to democratize the reading and understanding of insurance contracts through artificial intelligence. At ASNAP, we believe that every person deserves to fully understand their coverage and rights.",
        },
        card3: {
          title: "Technology Designed to Serve You",
        },
        insuranceDomains: {
          naturalMedicine: "Natural Medicine",
          hospitalization: "Hospitalization",
          travel: "Travel",
          outpatient: "Outpatient",
          accident: "Accident",
          dental: "Dental",
        },
        contact: {
          title: "Contact",
          text: "For any questions : ",
        },
      },
      legal: {
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
              website: "Website",
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Limited liability company (LLC)",
              address: "1530 Payerne, Switzerland",
              registration: "CHE-279.843.809",
              website: "asnap.ch",
            },
          },
          host: {
            title: "Hosting Provider",
            content: {
              name: "Name",
              address: "Address",
              phone: "Phone",
              website: "Website",
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Switzerland",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com",
            },
          },
          intellectualProperty: {
            title: "Intellectual Property",
            content: "All content on the ASNAP website (texts, images, illustrations, logos, icons, downloadable files, structure, source code, etc.) is the exclusive property of ASNAP, unless otherwise explicitly stated. Any reproduction, representation, modification, publication, or adaptation, in whole or in part, of these elements, by any means or process, is prohibited without prior written permission.",
          },
          personalData: {
            title: "Personal Data",
            content: "ASNAP is committed to respecting the confidentiality of personal data collected through its website and processing it in strict compliance with the General Data Protection Regulation (GDPR) or the Swiss Federal Data Protection Act (FADP), depending on your country of residence.",
            details: {
              collected: "Data collected : name, email address, PDF documents uploaded for analysis purposes",
              purpose: "Purpose : automated processing of insurance documents and improvement of our services",
              retention: "Retention period : limited to what is strictly necessary",
              rights: "Right of access, rectification, and deletion : contact us at [GDPR contact email address]",
            },
          },
          cookies: {
            title: "Cookies",
            content: "The ASNAP website uses cookies to enhance user experience, ensure optimal technical functioning, and collect anonymous performance data. You can configure your preferences via the consent banner upon first access.",
          },
          liability: {
            title: "Liability",
            content: "ASNAP provides assistance in reading and understanding insurance contracts without replacing an advisor or an insurance company. The user remains solely responsible for decisions made based on the information generated by the tool.",
          },
        },
        contact: {
          title: "Contact",
          description: "For any questions or information requests regarding the asnap.ch website, you can contact us at the following addresses :",
          infoLabel: "General information",
          clientServiceLabel: "Customer service",
          addressLabel: "Postal address",
          address: "Federali sàrl\n1530 Payerne, Switzerland",
        },
      },
      privacy: {
        title: "Privacy Policy",
        introduction: {
          title: "Introduction",
          content: "At ASNAP, the privacy of your data is our top priority. This privacy policy aims to inform you clearly and transparently about how we collect, use, store, and protect your personal data when you use our platform.",
        },
        about: {
          title: "Who We Are",
          content: "ASNAP is a digital tool powered by artificial intelligence, enabling users to automatically analyze their health insurance contract from a simple PDF file. The goal is to provide a clear and simplified evaluation of health coverage.",
        },
        dataCollected: {
          title: "Personal Data Collected",
          content: {
            intro: "When you use ASNAP, we may collect the following data :",
            identification: "<strong>Identification Data</strong> : name, surname, email address, phone number (if provided voluntarily)",
            documents: "<strong>Data from Uploaded Documents</strong> : information contained in your PDF insurance contract",
            technical: "<strong>Technical Data</strong> : IP address, browser type, operating system, navigation data",
            usage: "<strong>Usage Data</strong> : frequency of tool usage, clicks, visited pages, session duration",
          },
        },
        purposes: {
          title: "Purposes of Processing",
          content: {
            intro: "Your data is collected for the following purposes :",
            analysis: "To provide a personalized analysis of your health insurance contract",
            improvement: "To improve the quality and accuracy of our AI tool",
            support: "To respond to your requests or questions via our customer service",
            compliance: "To comply with our legal and regulatory obligations",
          },
        },
        storage: {
          title: "Data Storage and Security",
          content: "Your data is stored on secure servers located in the European Union. We implement technical and organizational measures to protect your data against loss, unauthorized access, or disclosure. Analyzed PDF files are not retained beyond the duration necessary for the analysis, unless you explicitly consent to extended use.",
        },
        sharing: {
          title: "Data Sharing",
          content: "We do not sell, rent, or exchange any personal data with third parties. Technical service providers may process certain data on our behalf (hosting, maintenance, analytics), in strict compliance with this policy and under confidentiality agreements.",
        },
        retention: {
          title: "Data Retention Period",
          content: {
            contact: "<strong>Contact Data</strong> : retained for 3 years from the last active contact",
            documents: "<strong>Data from PDF Files</strong> : automatically deleted after analysis, unless otherwise consented",
            technical: "<strong>Technical Data</strong> : retained for a maximum of 13 months for statistical purposes",
          },
        },
        rights: {
          title: "Your Rights",
          content: {
            intro: "In accordance with applicable regulations (GDPR), you have the following rights :",
            access: "Right to access, rectify, and delete your personal data",
            restriction: "Right to restrict or object to processing",
            portability: "Right to data portability",
            consent: "Right to withdraw your consent at any time",
            contact: "To exercise these rights, contact us at : <0>privacy@asnap.com</0>",
          },
        },
        cookies: {
          title: "Cookies",
          content: "ASNAP uses cookies for audience measurement, security, and user experience improvement. To learn more or modify your preferences, please consult our <0>Cookie Policy</0>.",
        },
        updates: {
          title: "Policy Updates",
          content: "This privacy policy may be updated at any time. Any significant changes will be communicated to you via email or on our website.",
        },
        contactSection: {
          title: "Contact Us",
          content: "For any questions regarding this privacy policy, please feel free to contact us.",
          technicalSupport: {
            label: "Technical Support :",
            email: "info@asnap",
          },
          dataProtection: {
            label: "Data Protection :",
            email: "clients@asnap.ch",
          },
          headquarters: {
            label: "Headquarters :",
            address: "Rue de l'Innovation 15, 1200 Geneva, Switzerland",
          },
        },
        footer: {
          copyright: "© {{year}} ASNAP - All rights reserved",
        },
      },
    },
  },
  it: {
    translation: {
      home2: {
        title: "Pagina iniziale",
      },
      benchmarkReport: {
        title: "Risultati del Benchmark",
        description: "La tua analisi dettagliata della copertura",
        overallScore: "Punteggio complessivo della copertura",
        categoryDetails: "Dettagli per categoria",
        category: "Categoria",
        evaluation: "Valutazione",
        analyzeAnother: "Analizza un altro documento",
        medals: {
          gold: "Oro",
          silver: "Argento",
          bronze: "Bronzo",
        },
      },
      hero: {
        title: "Sei un capofamiglia, uno studente o una coppia ?",
        description: `Asnap utilizza l'IA per decifrare le tue polizze assicurative. Carica la tua polizza o contratto e ottieni immediatamente una visione chiara, precisa e trasparente delle prestazioni.`,
        startNow: "🔥 Analizza il tuo contratto con 1 clic",
        imageAlt: "Insurance AI",
        analyzePdf: "Analisi intelligente della Sua assicurazione",
        withAI: "con l'IA",
        learnMore: "Scopri di Più",
      },
      home: "Home",
      roadmap: "Percorso",
      getStarted: "Inizia",
      uploadPdf: {
        title: "Caricate il vostro contratto di assicurazione",
        phonePlaceholder: "Inserisci il tuo numero di telefono",
        errorNoPhone: "Inserisci il tuo numero di telefono !",
        emailPlaceholder: "Inserisci il tuo indirizzo email",
        fileSelectedToast: "File PDF selezionato !",
        pdfOnlyToast: "Sono ammessi solo file PDF !",
        fileDeletedToast: "File eliminato !",
        fileSelected: "Selezionato",
        dragDrop: "Trascina il tuo documento qui",
        optionalCategoriesTitle: "Rendi facoltative alcune categorie :",
        clickToBrowse: "o clicca per sfogliare",
        choice: "1 PDF o fino a 4 immagini JPEG/HEIC",
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
            "Se non viaggi fuori dal territorio svizzero o se già benefici di una copertura privata offerta da un altro assicuratore (TCS, Zürich, Allianz, Generali, ecc.), puoi selezionare questa opzione per rendere l'analisi di questa categoria facoltativa.",
        },
        acceptConditions: {
          prefix: "Accetto i",
          link: "Termini d'uso",
        },
        processing: "Elaborazione in corso...",
        generateBenchmark: "Ottieni la mia analisi",
        errorNoFile: "Seleziona un file PDF !",
        errorNoEmail: "Inserisci un indirizzo email !",
        errorAgree: "Devi accettare i termini !",
        benchmarkSuccessToast: "Benchmark generato con successo !",
        benchmarkErrorToast: "Errore durante la generazione della tua diagnosi di copertura !",
      },
      analysis: {
        sectionTitle: "Una visione chiara, fin nei minimi dettagli",
        content: "Asnap Premium illumina le aree d'ombra spesso trascurate : salute mentale, attività fisica, situazioni particolari… Grazie a un'analisi personalizzata, benefici di un supporto preciso, allineato alle tue priorità.",
        premiumNote: "Oggi i nostri esperti ti consigliano direttamente. Domani, un'IA comportamentale prenderà il relais per perfezionare ulteriormente le raccomandazioni.",
        futureLabel: "Il 90% delle persone scopre troppo tardi che la propria assicurazione non copre l’essenziale. Non correre questo rischio.",
        futureLabelpart1: "Il 90% delle persone scopre troppo tardi che la propria assicurazione non copre l’essenziale.",
        futureLabelpart2: "Non correre questo rischio.",
        futureNote: "",
        buttonText: "Accedi al rapporto completo",
      },
      footer: {
        contact: "Contatti",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informazioni :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Servizio Clienti :",
        clientServiceEmail: "clients@asnap.ch",
      },
      contact: {
        heroTitle: "Contatto",
        heroDescription: "ASNAP semplifica la lettura e la valutazione dei contratti assicurativi grazie all'intelligenza artificiale. Il nostro team è a tua disposizione per qualsiasi richiesta di informazioni, partnership o assistenza.",
        formTitle: "Modulo di contatto",
        formDescription: "Si prega di compilare il modulo sottostante. Un membro del nostro team ti risponderà al più presto.",
        formLabels: {
          name: "Nome completo",
          email: "Indirizzo email ",
          emailPlaceholder: "Inserisci il tuo indirizzo email",
          subject: "Oggetto della richiesta",
          message: "Il tuo messaggio",
          phonePlaceholder: "Inserisci il tuo numero di telefono",
        },
        sendButton: "Invia la mia richiesta",
        successTitle: "Messaggio inviato !",
        successMessage: "Ti risponderemo al più presto.",
        confidentiality: {
          title: "Trattamento confidenziale",
          text: "Tutte le informazioni trasmesse sono strettamente riservate e trattate conformemente alla normativa vigente (GDPR / LPD).",
        },
        contactInfoTitle: "Informazioni di contatto",
        contactMethods: {
          email: "Email",
          phone: "Telefono",
          address: "Indirizzo postale",
        },
        contactInfoPlaceholders: {
          phone: "+41 78 604 60 81",
          address: "Federali sàrl 1530 Payerne, Svizzera",
        },
        demoRequestTitle: "Richiesta di analisi personalizzata",
        demoDescription: "Desideri una dimostrazione o fare una domanda specifica a un esperto di assicurazioni e IA ? Chiama ora uno dei nostri specialisti :",
        scheduleButton: "Chiama ora",
      },
      about: {
        title: "Informazioni",
        card1: {
          title: "L'analisi assicurativa che ha senso",
          content: "ASNAP semplifica i tuoi contratti assicurativi con l'intelligenza artificiale. Carica la tua polizza e ottieni in pochi secondi una lettura chiara, affidabile e comprensibile delle tue coperture e prestazioni. La nostra piattaforma trasforma contratti complessi in analisi semplici, leggibili e accessibili.",
        },
        card2: {
          title: "La nostra missione",
          content: "La nostra missione è democratizzare la lettura e la comprensione dei contratti assicurativi grazie all'intelligenza artificiale. In ASNAP, crediamo che ogni persona meriti di comprendere appieno le proprie coperture e diritti.",
        },
        card3: {
          title: "Tecnologia progettata per servirti",
        },
        insuranceDomains: {
          naturalMedicine: "Medicina naturale",
          hospitalization: "Ospedalizzazione",
          travel: "Viaggio",
          outpatient: "Ambulatoriale",
          accident: "Incidente",
          dental: "Dentale",
        },
        contact: {
          title: "Contatto",
          text: "Per qualsiasi domanda : ",
        },
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
              website: "Sito web",
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Società a responsabilità limitata (sàrl)",
              address: "1530 Payerne, Svizzera",
              registration: "CHE-279.843.809",
              website: "asnap.ch",
            },
          },
          host: {
            title: "Hosting",
            content: {
              name: "Nome",
              address: "Indirizzo",
              phone: "Telefono",
              website: "Sito web",
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Svizzera",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com",
            },
          },
          intellectualProperty: {
            title: "Proprietà intellettuale",
            content: "Tutti i contenuti presenti sul sito ASNAP (testi, immagini, illustrazioni, loghi, icone, file scaricabili, struttura, codice sorgente, ecc.) sono di proprietà esclusiva di ASNAP, salvo esplicita menzione contraria. È vietata qualsiasi riproduzione, rappresentazione, modifica, pubblicazione o adattamento, totale o parziale, di questi elementi, con qualsiasi mezzo o procedura, senza autorizzazione scritta preventiva.",
          },
          personalData: {
            title: "Dati personali",
            content: "ASNAP si impegna a rispettare la riservatezza dei dati personali raccolti tramite il suo sito e a trattarli in stretta conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) o alla legge federale svizzera sulla protezione dei dati (LPD), a seconda del paese di residenza.",
            details: {
              collected: "Dati raccolti : nome, indirizzo email, documenti PDF caricati a fini di analisi",
              purpose: "Finalità : elaborazione automatica dei documenti assicurativi e miglioramento dei nostri servizi",
              retention: "Periodo di conservazione : limitato allo stretto necessario",
              rights: "Diritto di accesso, rettifica e cancellazione : contattaci all'indirizzo [email di contatto GDPR]",
            },
          },
          cookies: {
            title: "Cookie",
            content: "Il sito ASNAP utilizza cookie per migliorare l'esperienza utente, garantire un funzionamento tecnico ottimale e raccogliere dati di performance anonimi. Puoi configurare le tue preferenze tramite il banner di consenso al primo accesso.",
          },
          liability: {
            title: "Responsabilità",
            content: "ASNAP fornisce assistenza nella lettura e comprensione dei contratti assicurativi senza sostituire un consulente o una compagnia assicurativa. L'utente rimane l'unico responsabile delle decisioni prese sulla base delle informazioni generate dallo strumento.",
          },
        },
        contact: {
          title: "Contatto",
          description: "Per qualsiasi domanda o richiesta di informazioni riguardanti il sito asnap.ch, puoi contattarci ai seguenti indirizzi :",
          infoLabel: "Informazioni generali",
          clientServiceLabel: "Servizio clienti",
          addressLabel: "Indirizzo postale",
          address: "Federali sàrl\n1530 Payerne, Svizzera",
        },
      },
      privacy: {
        title: "Informativa sulla Privacy",
        introduction: {
          title: "Introduzione",
          content: "In ASNAP, la privacy dei tuoi dati è la nostra massima priorità. Questa informativa sulla privacy ha l'obiettivo di informarti in modo chiaro e trasparente su come raccogliamo, utilizziamo, conserviamo e proteggiamo i tuoi dati personali quando utilizzi la nostra piattaforma.",
        },
        about: {
          title: "Chi Siamo",
          content: "ASNAP è uno strumento digitale basato sull'intelligenza artificiale, che consente agli utenti di analizzare automaticamente il loro contratto di assicurazione sanitaria a partire da un semplice file PDF. L'obiettivo è fornire una valutazione chiara e semplificata della copertura sanitaria.",
        },
        dataCollected: {
          title: "Dati Personali Raccolti",
          content: {
            intro: "Quando utilizzi ASNAP, possiamo raccogliere i seguenti dati :",
            identification: "<strong>Dati di Identificazione</strong> : nome, cognome, indirizzo email, numero di telefono (se forniti volontariamente)",
            documents: "<strong>Dati dai Documenti Caricati</strong> : informazioni contenute nel tuo contratto assicurativo in PDF",
            technical: "<strong>Dati Tecnici</strong> : indirizzo IP, tipo di browser, sistema operativo, dati di navigazione",
            usage: "<strong>Dati di Utilizzo</strong> : frequenza di utilizzo dello strumento, clic, pagine visitate, durata della sessione",
          },
        },
        purposes: {
          title: "Finalità del Trattamento",
          content: {
            intro: "I tuoi dati sono raccolti per le seguenti finalità :",
            analysis: "Fornire un'analisi personalizzata del tuo contratto di assicurazione sanitaria",
            improvement: "Migliorare la qualità e la precisione del nostro strumento di intelligenza artificiale",
            support: "Rispondere alle tue richieste o domande tramite il nostro servizio clienti",
            compliance: "Rispettare i nostri obblighi legali e regolamentari",
          },
        },
        storage: {
          title: "Conservazione e Sicurezza dei Dati",
          content: "I tuoi dati sono conservati su server sicuri situati nell'Unione Europea. Adottiamo misure tecniche e organizzative per proteggere i tuoi dati da perdita, accesso non autorizzato o divulgazione. I file PDF analizzati non vengono conservati oltre il tempo necessario per l'analisi, salvo consenso esplicito per un utilizzo prolungato.",
        },
        sharing: {
          title: "Condivisione dei Dati",
          content: "Non vendiamo, noleggiamo o scambiamo alcun dato personale con terzi. I fornitori di servizi tecnici possono trattare alcuni dati per nostro conto (hosting, manutenzione, analisi), nel rigoroso rispetto di questa informativa e sotto accordi di riservatezza.",
        },
        retention: {
          title: "Periodo di Conservazione",
          content: {
            contact: "<strong>Dati di Contatto</strong> : conservati per 3 anni dall'ultimo contatto attivo",
            documents: "<strong>Dati dai File PDF</strong> : eliminati automaticamente dopo l'analisi, salvo consenso contrario",
            technical: "<strong>Dati Tecnici</strong> : conservati per un massimo di 13 mesi a fini statistici",
          },
        },
        rights: {
          title: "I Tuoi Diritti",
          content: {
            intro: "Conformemente alla normativa vigente (GDPR), hai i seguenti diritti :",
            access: "Diritto di accesso, rettifica ed eliminazione dei tuoi dati personali",
            restriction: "Diritto di limitazione o opposizione al trattamento",
            portability: "Diritto alla portabilità dei dati",
            consent: "Diritto di revocare il tuo consenso in qualsiasi momento",
            contact: "Per esercitare questi diritti, contattaci a : <0>privacy@asnap.com</0>",
          },
        },
        cookies: {
          title: "Cookie",
          content: "ASNAP utilizza i cookie per misurare l'audience, garantire la sicurezza e migliorare l'esperienza utente. Per saperne di più o modificare le tue preferenze, consulta la nostra <0>Politica sui Cookie</0>.",
        },
        updates: {
          title: "Aggiornamenti della Politica",
          content: "Questa informativa sulla privacy può essere aggiornata in qualsiasi momento. Eventuali modifiche significative ti saranno comunicate via email o sul nostro sito web.",
        },
        contactSection: {
          title: "Contattaci",
          content: "Per qualsiasi domanda relativa a questa informativa sulla privacy, non esitare a contattarci.",
          technicalSupport: {
            label: "Supporto tecnico :",
            email: "info@asnap",
          },
          dataProtection: {
            label: "Protezione dei dati :",
            email: "clients@asnap.ch",
          },
          headquarters: {
            label: "Sede Centrale :",
            address: "Rue de l'Innovation 15, 1200 Ginevra, Svizzera",
          },
        },
        footer: {
          copyright: "© {{year}} ASNAP - Tutti i diritti riservati",
        },
      },
    },
  },
  de: {
    translation: {
      home2: {
        title: "Startseite",
      },
      benchmarkReport: {
        title: "Benchmark-Ergebnisse",
        description: "Ihre detaillierte Deckungsanalyse",
        overallScore: "Gesamt-Deckungspunktzahl",
        categoryDetails: "Kategoriedetails",
        category: "Kategorie",
        evaluation: "Bewertung",
        analyzeAnother: "Ein weiteres Dokument analysieren",
        medals: {
          gold: "Gold",
          silver: "Silber",
          bronze: "Bronze",
        },
      },
      hero: {
        title: "Sind Sie Familienoberhaupt, Student oder ein Paar ?",
        description: `Asnap nutzt KI, um Ihre Versicherungspolicen zu entschlüsseln. Laden Sie Ihre Police oder Vertrag hoch und erhalten Sie sofort einen klaren, präzisen und transparenten Überblick über Ihre Leistungen.`,
        startNow: "🔥 Analysieren Sie Ihren Vertrag mit 1 Klick",
        imageAlt: "Insurance AI",
        analyzePdf: "Intelligente Analyse Ihrer Versicherung",
        learnMore: "Mehr Erfahren",
      },
      home: "Startseite",
      roadmap: "Fahrplan",
      getStarted: "Loslegen",
      uploadPdf: {
        title: "Laden Sie Ihren Versicherungsvertrag hoch",
        phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
        errorNoPhone: "Bitte geben Sie Ihre Telefonnummer ein !",
        emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
        fileSelectedToast: "PDF-Datei ausgewählt !",
        pdfOnlyToast: "Nur PDF-Dateien sind erlaubt !",
        fileDeletedToast: "Datei gelöscht !",
        fileSelected: "Ausgewählt",
        dragDrop: "Ziehen Sie Ihr Dokument hier",
        optionalCategoriesTitle: "Machen Sie bestimmte Kategorien optional :",
        clickToBrowse: "oder klicken Sie zum Durchsuchen",
        choice: "1 PDF oder bis zu 4 JPEG/HEIC-Bilder",
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
            "Wenn Sie nicht außerhalb der Schweiz reisen oder bereits von einem anderen Versicherer (TCS, Zürich, Allianz, Generali, etc.) eine private Abdeckung erhalten, können Sie diese Option aktivieren, um die Analyse dieser Kategorie optional zu machen.",
        },
        acceptConditions: {
          prefix: "Ich akzeptiere die",
          link: "Nutzungsbedingungen",
        },
        processing: "Verarbeitung läuft...",
        generateBenchmark: "Meine Analyse erhalten",
        errorNoFile: "Bitte wählen Sie eine PDF-Datei aus !",
        errorNoEmail: "Bitte geben Sie eine E-Mail-Adresse ein !",
        errorAgree: "Sie müssen die Bedingungen akzeptieren !",
        benchmarkSuccessToast: "Benchmark erfolgreich erstellt !",
        benchmarkErrorToast: "Fehler beim Erstellen Ihrer Deckungsdiagnose !",
      },
      analysis: {
        sectionTitle: "Ein klares Bild, bis ins kleinste Detail",
        content: "Asnap Premium beleuchtet die oft übersehenen Schattenbereiche : psychische Gesundheit, körperliche Aktivität, besondere Lebenslagen… Dank einer personalisierten Analyse erhalten Sie präzise Begleitung, abgestimmt auf Ihre Prioritäten.",
        premiumNote: "Heute beraten Sie unsere Experten persönlich. Morgen übernimmt eine Verhaltens-KI, um Empfehlungen noch präziser zu optimieren.",
        futureLabel: "90 % der Menschen merken zu spät, dass ihre Versicherung das Wesentliche nicht abdeckt. Gehen Sie dieses Risiko nicht ein.",
        futureLabelpart1: "90 % der Menschen merken zu spät, dass ihre Versicherung das Wesentliche nicht abdeckt.",
        futureLabelpart2: "Gehen Sie dieses Risiko nicht ein.",
        futureNote: "",
        buttonText: "Zugang zum vollständigen Bericht",
      },
      footer: {
        contact: "Kontakt",
        address1: "Museumstrasse 1",
        address2: "8021 Zürich",
        infoLabel: "Informationen :",
        infoEmail: "info@asnap",
        clientServiceLabel: "Kundendienst :",
        clientServiceEmail: "clients@asnap.ch",
      },
      contact: {
        heroTitle: "Kontakt",
        heroDescription: "ASNAP vereinfacht das Lesen und Bewerten von Versicherungsverträgen durch künstliche Intelligenz. Unser Team steht Ihnen für alle Informationsanfragen, Partnerschaften oder Unterstützung zur Verfügung.",
        formTitle: "Kontaktformular",
        formDescription: "Bitte füllen Sie das folgende Formular aus. Ein Mitglied unseres Teams wird sich so schnell wie möglich bei Ihnen melden.",
        formLabels: {
          name: "Vollständiger Name",
          email: " E-Mail-Adresse",
          emailPlaceholder: "Geben Sie Ihre E-Mail-Adresse ein",
          subject: "Betreff der Anfrage",
          message: "Ihre Nachricht",
          phonePlaceholder: "Geben Sie Ihre Telefonnummer ein",
        },
        sendButton: "Anfrage senden",
        successTitle: "Nachricht gesendet !",
        successMessage: "Wir werden uns so schnell wie möglich bei Ihnen melden.",
        confidentiality: {
          title: "Vertrauliche Bearbeitung",
          text: "Alle übermittelten Informationen sind streng vertraulich und werden gemäß den geltenden Vorschriften (DSGVO / DSG) verarbeitet.",
        },
        contactInfoTitle: "Kontaktinformationen",
        contactMethods: {
          email: "E-Mail",
          phone: "Telefon",
          address: "Postanschrift",
        },
        contactInfoPlaceholders: {
          phone: "+41 78 604 60 81",
          address: "Federali sàrl 1530 Payerne, Schweiz",
        },
        demoRequestTitle: "Anfrage für personalisierte Analyse",
        demoDescription: "Möchten Sie eine Demonstration erhalten oder einem Experten für Versicherungen und KI eine spezifische Frage stellen ? Rufen Sie jetzt einen unserer Spezialisten an :",
        scheduleButton: "Jetzt anrufen",
      },
      about: {
        title: "Über",
        card1: {
          title: "Versicherungsanalyse mit Sinn und Verstand",
          content: "ASNAP vereinfacht Ihre Versicherungsverträge durch KI. Laden Sie Ihre Police hoch und erhalten Sie innerhalb von Sekunden eine klare, verlässliche und verständliche Übersicht Ihrer Deckungen und Leistungen. Unsere Plattform wandelt komplexe Verträge in einfache, lesbare und zugängliche Analysen um.",
        },
        card2: {
          title: "Unsere Mission",
          content: "Unsere Mission ist es, das Lesen und Verstehen von Versicherungsverträgen durch künstliche Intelligenz zu demokratisieren. Bei ASNAP glauben wir, dass jeder Mensch seine Deckung und Rechte vollständig verstehen sollte.",
        },
        card3: {
          title: "Technologie, die Ihnen dient",
        },
        insuranceDomains: {
          naturalMedicine: "Naturmedizin",
          hospitalization: "Hospitalisierung",
          travel: "Reise",
          outpatient: "Ambulant",
          accident: "Unfall",
          dental: "Zahn",
        },
        contact: {
          title: "Kontakt",
          text: "Bei Fragen : ",
        },
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
              website: "Website",
            },
            values: {
              name: "Federali sàrl",
              legalForm: "Gesellschaft mit beschränkter Haftung (GmbH)",
              address: "1530 Payerne, Schweiz",
              registration: "CHE-279.843.809",
              website: "asnap.ch",
            },
          },
          host: {
            title: "Hosting-Anbieter",
            content: {
              name: "Name",
              address: "Adresse",
              phone: "Telefon",
              website: "Website",
            },
            values: {
              name: "Infomaniak",
              address: "Rue Eugène-Marziano 25, 1227 Genève, Schweiz",
              phone: "+41 22 820 35 44",
              website: "https://www.infomaniak.com",
            },
          },
          intellectualProperty: {
            title: "Geistiges Eigentum",
            content: "Der gesamte Inhalt auf der ASNAP-Website (Texte, Bilder, Illustrationen, Logos, Symbole, herunterladbare Dateien, Struktur, Quellcode usw.) ist, sofern nicht ausdrücklich anders angegeben, ausschließliches Eigentum von ASNAP. Jede Vervielfältigung, Darstellung, Änderung, Veröffentlichung oder Anpassung dieser Elemente, ganz oder teilweise, mit welchen Mitteln oder Verfahren auch immer, ist ohne vorherige schriftliche Genehmigung untersagt.",
          },
          personalData: {
            title: "Personenbezogene Daten",
            content: "ASNAP verpflichtet sich, die Vertraulichkeit der über seine Website gesammelten personenbezogenen Daten zu respektieren und sie streng im Einklang mit der Datenschutz-Grundverordnung (DSGVO) oder dem schweizerischen Bundesgesetz über den Datenschutz (DSG), je nach Ihrem Wohnsitzland, zu verarbeiten.",
            details: {
              collected: "Gesammelte Daten : Name, E-Mail-Adresse, zu Analysezwecken hochgeladene PDF-Dokumente",
              purpose: "Zweck : automatische Verarbeitung von Versicherungsdokumenten und Verbesserung unserer Dienstleistungen",
              retention: "Aufbewahrungsdauer : auf das absolut Notwendige beschränkt",
              rights: "Recht auf Zugang, Berichtigung und Löschung : kontaktieren Sie uns unter [DSGVO-Kontakt-E-Mail-Adresse]",
            },
          },
          cookies: {
            title: "Cookies",
            content: "Die ASNAP-Website verwendet Cookies, um die Benutzererfahrung zu verbessern, eine optimale technische Funktion zu gewährleisten und anonyme Leistungsdaten zu sammeln. Sie können Ihre Präferenzen beim ersten Zugriff über das Einwilligungsbanner konfigurieren.",
          },
          liability: {
            title: "Haftung",
            content: "ASNAP bietet Hilfe beim Lesen und Verstehen von Versicherungsverträgen, ohne einen Berater oder ein Versicherungsunternehmen zu ersetzen. Der Nutzer bleibt allein verantwortlich für Entscheidungen, die auf den durch das Tool generierten Informationen basieren.",
          },
        },
        contact: {
          title: "Kontakt",
          description: "Bei Fragen oder Informationsanfragen bezüglich der Website asnap.ch können Sie uns unter den folgenden Adressen kontaktieren :",
          infoLabel: "Allgemeine Informationen",
          clientServiceLabel: "Kundendienst",
          addressLabel: "Postanschrift",
          address: "Federali sàrl\n1530 Payerne, Schweiz",
        },
      },
      privacy: {
        title: "Datenschutzrichtlinie",
        introduction: {
          title: "Einführung",
          content: "Bei ASNAP hat der Schutz Ihrer Daten höchste Priorität. Diese Datenschutzrichtlinie soll Sie klar und transparent darüber informieren, wie wir Ihre personenbezogenen Daten erheben, verwenden, speichern und schützen, wenn Sie unsere Plattform nutzen.",
        },
        about: {
          title: "Wer Wir Sind",
          content: "ASNAP ist ein digitales Tool, das auf künstlicher Intelligenz basiert und Nutzern ermöglicht, ihren Krankenversicherungsvertrag automatisch aus einer einfachen PDF-Datei zu analysieren. Ziel ist es, eine klare und vereinfachte Bewertung der Gesundheitsversorgung zu bieten.",
        },
        dataCollected: {
          title: "Erhobene Personenbezogene Daten",
          content: {
            intro: "Wenn Sie ASNAP nutzen, können wir die folgenden Daten erheben :",
            identification: "<strong>Identifikationsdaten</strong> : Name, Nachname, E-Mail-Adresse, Telefonnummer (falls freiwillig angegeben)",
            documents: "<strong>Daten aus hochgeladenen Dokumenten</strong> : Informationen in Ihrem PDF-Versicherungsvertrag",
            technical: "<strong>Technische Daten</strong> : IP-Adresse, Browsertyp, Betriebssystem, Navigationsdaten",
            usage: "<strong>Nutzungsdaten</strong> : Häufigkeit der Tool-Nutzung, Klicks, besuchte Seiten, Sitzungsdauer",
          },
        },
        purposes: {
          title: "Zwecke der Verarbeitung",
          content: {
            intro: "Ihre Daten werden zu folgenden Zwecken erhoben :",
            analysis: "Bereitstellung einer personalisierten Analyse Ihres Krankenversicherungsvertrags",
            improvement: "Verbesserung der Qualität und Genauigkeit unseres KI-Tools",
            support: "Beantwortung Ihrer Anfragen oder Fragen über unseren Kundenservice",
            compliance: "Erfüllung unserer rechtlichen und regulatorischen Verpflichtungen",
          },
        },
        storage: {
          title: "Datenspeicherung und Sicherheit",
          content: "Ihre Daten werden auf sicheren Servern in der Europäischen Union gespeichert. Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, unbefugtem Zugriff oder Offenlegung zu schützen. Analysierte PDF-Dateien werden nicht über die für die Analyse erforderliche Dauer hinaus aufbewahrt, es sei denn, Sie stimmen einer längeren Nutzung ausdrücklich zu.",
        },
        sharing: {
          title: "Datenweitergabe",
          content: "Wir verkaufen, vermieten oder tauschen keine personenbezogenen Daten mit Dritten. Technische Dienstleister können bestimmte Daten in unserem Auftrag verarbeiten (Hosting, Wartung, Analytik), in strikter Einhaltung dieser Richtlinie und unter Vertraulichkeitsvereinbarungen.",
        },
        retention: {
          title: "Aufbewahrungsfrist",
          content: {
            contact: "<strong>Kontaktdaten</strong> : 3 Jahre ab dem letzten aktiven Kontakt aufbewahrt",
            documents: "<strong>Daten aus PDF-Dateien</strong> : nach der Analyse automatisch gelöscht, sofern keine gegenteilige Zustimmung vorliegt",
            technical: "<strong>Technische Daten</strong> : maximal 13 Monate zu statistischen Zwecken aufbewahrt",
          },
        },
        rights: {
          title: "Ihre Rechte",
          content: {
            intro: "Gemäß den geltenden Vorschriften (DSGVO) haben Sie folgende Rechte :",
            access: "Recht auf Zugang, Berichtigung und Löschung Ihrer personenbezogenen Daten",
            restriction: "Recht auf Einschränkung oder Widerspruch gegen die Verarbeitung",
            portability: "Recht auf Datenportabilität",
            consent: "Recht, Ihre Einwilligung jederzeit zu widerrufen",
            contact: "Um diese Rechte auszuüben, kontaktieren Sie uns unter : <0>privacy@asnap.com</0>",
          },
        },
        cookies: {
          title: "Cookies",
          content: "ASNAP verwendet Cookies für die Messung der Zielgruppe, Sicherheit und Verbesserung der Benutzererfahrung. Um mehr zu erfahren oder Ihre Präferenzen zu ändern, konsultieren Sie bitte unsere <0>Cookie-Richtlinie</0>.",
        },
        updates: {
          title: "Aktualisierungen der Richtlinie",
          content: "Diese Datenschutzrichtlinie kann jederzeit aktualisiert werden. Wesentliche Änderungen werden Ihnen per E-Mail oder auf unserer Website mitgeteilt.",
        },
        contactSection: {
          title: "Kontaktieren Sie uns",
          content: "Für Fragen zu dieser Datenschutzrichtlinie zögern Sie bitte nicht, uns zu kontaktieren.",
          technicalSupport: {
            label: "Technischer Support :",
            email: "info@asnap",
          },
          dataProtection: {
            label: "Datenschutz :",
            email: "clients@asnap.ch",
          },
          headquarters: {
            label: "Hauptsitz :",
            address: "Rue de l'Innovation 15, 1200 Genf, Schweiz",
          },
        },
        footer: {
          copyright: "© {{year}} ASNAP - Alle Rechte vorbehalten",
        },
      },
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