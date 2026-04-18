// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/tmslab/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "Research overview, funded projects, and trainee recognition at the Brain Imaging and TMS Laboratory.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/publications/";
          },
        },{id: "nav-people",
          title: "People",
          description: "Meet the members of the Brain Imaging and TMS Laboratory.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/people/";
          },
        },{id: "nav-news",
          title: "News",
          description: "Lab announcements, publications, awards, and events.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/news/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/gallery/";
          },
        },{id: "nav-join-us",
          title: "Join Us",
          description: "Participate in one of our research studies or join the lab as a trainee.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/join/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/tmslab/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-three-new-publications-chou-et-al-2020-clin-neurophysiol-on-tms-induced-seizure-cases-warren-et-al-2020-brain-connect-on-amygdala-resting-state-fmri-and-chou-et-al-2020-neurobiol-aging-a-meta-analysis-of-rtms-effects-on-mci-and-ad",
          title: 'Three new publications! (Chou et al. 2020, Clin. Neurophysiol. on TMS-induced seizure cases,...',
          description: "",
          section: "News",},{id: "news-congratulations-to-rudolph-rodriguez-for-receiving-the-college-of-science-galileo-circle-scholarship-and-for-winning-third-place-in-the-undergraduate-research-poster-presentation-at-the-2020-waeso-student-research-conference",
          title: 'Congratulations to Rudolph Rodriguez for receiving the College of Science Galileo Circle Scholarship,...',
          description: "",
          section: "News",},{id: "news-new-grant-our-r01-project-enhancement-of-hippocampal-plasticity-using-repetitive-transcranial-magnetic-stimulation-is-funded-by-nih-nia-featured-in-uanews-bio5-news-and-the-phoenix-business-journal",
          title: 'New grant! Our R01 project “Enhancement of Hippocampal Plasticity Using Repetitive Transcranial Magnetic...',
          description: "",
          section: "News",},{id: "news-our-manuscript-transcranial-magnetic-stimulation-reveals-diminished-homeostatic-metaplasticity-in-cognitively-impaired-adults-is-accepted-by-brain-communications-congratulations-to-mark-sundman-koeun-lim-viet-ton-that-rudy-rodriguez-yilin-liu-and-ying-hui-chou",
          title: 'Our manuscript “Transcranial Magnetic Stimulation Reveals Diminished Homeostatic Metaplasticity in Cognitively Impaired Adults”...',
          description: "",
          section: "News",},{id: "news-congratulations-to-dr-ying-hui-chou-who-has-been-awarded-a-faculty-seed-grant-by-the-university-of-arizona",
          title: 'Congratulations to Dr. Ying-hui Chou, who has been awarded a Faculty Seed Grant...',
          description: "",
          section: "News",},{id: "news-our-manuscript-dual-task-performance-is-associated-with-brain-mri-morphometry-in-individuals-with-mild-cognitive-impairment-is-published-in-the-journal-of-neuroimaging",
          title: 'Our manuscript “Dual-task performance is associated with brain MRI Morphometry in individuals with...',
          description: "",
          section: "News",},{id: "news-new-equipment-the-tms-compatible-eeg-system-is-delivered",
          title: 'New equipment! The TMS-compatible EEG system is delivered.',
          description: "",
          section: "News",},{id: "news-dr-ying-hui-chou-has-been-awarded-an-enhancement-of-equipment-fund-by-the-university-of-arizona-for-the-mri-compatible-transcranial-magnetic-stimulation-system",
          title: 'Dr. Ying-hui Chou has been awarded an Enhancement of Equipment Fund by the...',
          description: "",
          section: "News",},{id: "news-rudolph-rodriguez-s-manuscript-chemobrain-the-unspoken-reality-of-life-after-cancer-is-accepted-for-publication-by-harvard-brain-great-work-rudy",
          title: 'Rudolph Rodriguez’s manuscript “Chemobrain: The Unspoken Reality of Life After Cancer” is accepted...',
          description: "",
          section: "News",},{id: "news-congratulations-to-mark-sundman-for-receiving-the-galileo-circle-graduate-scholars-award",
          title: 'Congratulations to Mark Sundman for receiving the Galileo Circle Graduate Scholars Award! 🏆...',
          description: "",
          section: "News",},{id: "news-new-equipment-our-mri-compatible-tms-and-navigation-systems-were-delivered-today",
          title: 'New equipment! Our MRI-compatible TMS and Navigation Systems were delivered today.',
          description: "",
          section: "News",},{id: "news-congratulations-to-sundman-chen-and-liu-for-receiving-uarizona-gspc-travel-awards-to-support-their-trip-to-the-4th-international-brain-stimulation-conference-in-charleston-sc",
          title: 'Congratulations to Sundman, Chen, and Liu for receiving UArizona GSPC Travel Awards to...',
          description: "",
          section: "News",},{id: "news-congratulations-to-green-sundman-and-chou-their-review-opioid-induced-microglia-reactivity-modulates-opioid-reward-analgesia-and-behavior-is-published-in-neuroscience-and-biobehavioral-reviews",
          title: 'Congratulations to Green, Sundman, and Chou! Their review “Opioid-induced microglia reactivity modulates opioid...',
          description: "",
          section: "News",},{id: "news-new-grant-our-r21-project-interleaved-tms-fmri-for-hippocampal-stimulation-modeling-dose-response-relationship-in-amnestic-mild-cognitive-impairment-is-funded-by-nih-nia",
          title: 'New grant! Our R21 project “Interleaved TMS-fMRI for Hippocampal Stimulation: Modeling Dose-Response Relationship...',
          description: "",
          section: "News",},{id: "news-kielar-patterson-and-chou-s-efficacy-of-repetitive-transcranial-magnetic-stimulation-in-treating-stroke-aphasia-is-accepted-for-publication-in-clinical-neurophysiology",
          title: 'Kielar, Patterson, and Chou’s “Efficacy of repetitive transcranial magnetic stimulation in treating stroke...',
          description: "",
          section: "News",},{id: "news-chen-ton-that-ugonna-liu-nadel-and-chou-s-manuscript-theta-burst-stimulation-enhances-memory-and-functional-connectivity-along-inferior-longitudinal-fasciculus-in-mild-cognitive-impairment-is-accepted-by-pnas",
          title: 'Chen, Ton That, Ugonna, Liu, Nadel, and Chou’s manuscript “Theta Burst Stimulation Enhances...',
          description: "",
          section: "News",},{id: "news-association-between-responsiveness-to-tms-and-interhemispheric-functional-connectivity-of-sensorimotor-cortex-in-older-adults-is-now-published-in-brain-connectivity",
          title: '“Association Between Responsiveness to TMS and Interhemispheric Functional Connectivity of Sensorimotor Cortex in...',
          description: "",
          section: "News",},{id: "news-our-meta-analysis-cortical-excitability-and-plasticity-in-alzheimer-s-disease-and-mild-cognitive-impairment-was-published-in-ageing-research-reviews",
          title: 'Our meta-analysis “Cortical excitability and plasticity in Alzheimer’s disease and mild cognitive impairment”...',
          description: "",
          section: "News",},{id: "news-congratulations-to-dr-mark-sundman-for-successfully-defending-his-dissertation",
          title: 'Congratulations to Dr. Mark Sundman for successfully defending his dissertation! 🎓',
          description: "",
          section: "News",},{id: "news-welcoming-new-members-to-the-lab",
          title: 'Welcoming new members to the lab! 🎉',
          description: "",
          section: "News",},{id: "news-our-manuscript-transcranial-magnetic-stimulation-for-the-treatment-of-chemo-brain-has-been-accepted-for-publication-in-sensors",
          title: 'Our manuscript “Transcranial magnetic stimulation for the treatment of chemo brain” has been...',
          description: "",
          section: "News",},{id: "news-our-manuscript-the-hyper-excitable-brain-what-can-a-ubiquitous-tms-measure-reveal-about-cognitive-aging-has-been-accepted-by-neurobiology-of-aging",
          title: 'Our manuscript “The (hyper)excitable brain: What can a ubiquitous TMS measure reveal about...',
          description: "",
          section: "News",},{id: "news-congratulations-to-dr-yu-chin-allison-chen-for-successfully-defending-her-dissertation",
          title: 'Congratulations to Dr. Yu-Chin Allison Chen for successfully defending her dissertation! 🎓',
          description: "",
          section: "News",},{id: "news-new-publications-in-2024-sundman-et-al-aging-brain-and-hall-et-al-geroscience-on-tms-derived-biomarkers-and-tms-eeg-approaches-to-mci-and-alzheimer-s",
          title: 'New publications in 2024! Sundman et al. (Aging Brain) and Hall et al....',
          description: "",
          section: "News",},{id: "projects-research-area-title",
          title: 'Research area title',
          description: "One-line description of this research area.",
          section: "Projects",handler: () => {
              window.location.href = "/tmslab/projects/1_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
