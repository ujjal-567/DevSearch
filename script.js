// Documentation and Video Links Database
const languageLinks = {
    html: {
        name: 'HTML',
        docs: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        official: 'https://html.spec.whatwg.org/',
        w3schools: 'https://www.w3schools.com/html/',
        videos: ['https://www.youtube.com/results?search_query=HTML+tutorial', 'https://www.youtube.com/watch?v=qz0aGYrrlhU']
    },
    css: {
        name: 'CSS',
        docs: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        official: 'https://www.w3.org/Style/CSS/',
        w3schools: 'https://www.w3schools.com/css/',
        videos: ['https://www.youtube.com/results?search_query=CSS+tutorial', 'https://www.youtube.com/watch?v=1Rs2ND1ryYc']
    },
    javascript: {
        name: 'JavaScript',
        docs: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        official: 'https://tc39.es/',
        w3schools: 'https://www.w3schools.com/js/',
        videos: ['https://www.youtube.com/results?search_query=JavaScript+tutorial', 'https://www.youtube.com/watch?v=PkZNo7MFNFg']
    },
    python: {
        name: 'Python',
        docs: 'https://docs.python.org/3/',
        tutorial: 'https://docs.python.org/3/tutorial/index.html?utm_source=chatgpt.com',
        official: 'https://www.python.org/',
        w3schools: 'https://www.w3schools.com/python/',
        guides: ['https://realpython.com/tutorials/web-dev/?utm_source=chatgpt.com','https://fastapi.tiangolo.com/learn/?utm_source=chatgpt.com'],
        videos: ['https://www.youtube.com/results?search_query=Python+tutorial', 'https://www.youtube.com/watch?v=kqtZnh07Cf8']
    },
    java: {
        name: 'Java',
        docs: 'https://docs.oracle.com/en/java/',
        official: 'https://www.java.com/',
        w3schools: 'https://www.w3schools.com/java/',
        videos: ['https://www.youtube.com/results?search_query=Java+tutorial', 'https://www.youtube.com/watch?v=eIrMbAQSU34']
    },
    cpp: {
        name: 'C++',
        docs: 'https://en.cppreference.com/',
        official: 'https://isocpp.org/',
        w3schools: 'https://www.w3schools.com/cpp/',
        videos: ['https://www.youtube.com/results?search_query=C++tutorial', 'https://www.youtube.com/watch?v=vLnPftxQ7fs']
    },
    csharp: {
        name: 'C#',
        docs: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
        official: 'https://www.w3schools.com/cs/',
        guides: ['https://www.geeksforgeeks.org/c-sharp-tutorial/', 'https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/'],
        videos: ['https://www.youtube.com/watch?v=GhQdlIFylQ8', 'https://www.youtube.com/watch?v=gfkTfcpWqAY']
    },
    // Additional Programming Languages
    c: {
        name: 'C',
        docs: 'https://www.open-std.org/jtc1/sc22/wg14/',
        official: 'https://www.tutorialspoint.com/cprogramming/index.htm',
        guides: ['https://www.geeksforgeeks.org/c-programming-language/', 'https://www.programiz.com/c-programming'],
        videos: ['https://www.youtube.com/watch?v=KJgsSFOSQv0', 'https://www.youtube.com/watch?v=IRQvP0f4V6A']
    },
    php: {
        name: 'PHP',
        docs: 'https://www.php.net/docs.php',
        official: 'https://www.w3schools.com/php/',
        guides: ['https://www.geeksforgeeks.org/php-tutorial/', 'https://www.tutorialspoint.com/php/index.htm'],
        videos: ['https://www.youtube.com/watch?v=OK_JCtrrv-c', 'https://www.youtube.com/watch?v=3xRMUDC74Cw']
    },
    kotlin: {
        name: 'Kotlin',
        docs: 'https://kotlinlang.org/docs/home.html',
        official: 'https://developer.android.com/kotlin',
        guides: ['https://www.programiz.com/kotlin-programming', 'https://kotlinlang.org/docs/basic-syntax.html'],
        videos: ['https://www.youtube.com/watch?v=F9UC9DY-vIU', 'https://www.youtube.com/watch?v=EExSSotojVI']
    },
    go: {
        name: 'Go (Golang)',
        docs: 'https://go.dev/doc/',
        official: 'https://gobyexample.com/',
        guides: ['https://www.geeksforgeeks.org/go-language-introduction/', 'https://golang.org/blog/pipelines'],
        videos: ['https://www.youtube.com/watch?v=un6ZyFkqFKo', 'https://www.youtube.com/watch?v=Q0sKAMal4WQ']
    },
    ruby: {
        name: 'Ruby',
        docs: 'https://www.ruby-lang.org/en/documentation/',
        official: 'https://ruby-doc.org/',
        guides: ['https://www.programiz.com/ruby-programming', 'https://www.geeksforgeeks.org/ruby-programming-language/'],
        videos: ['https://www.youtube.com/watch?v=t_ispmWmdjY', 'https://www.youtube.com/watch?v=Dji9ALCgfpM']
    },
    swift: {
        name: 'Swift',
        docs: 'https://www.swift.org/documentation/',
        official: 'https://developer.apple.com/swift/',
        guides: ['https://www.tutorialspoint.com/swift/index.htm', 'https://www.programiz.com/swift-programming'],
        videos: ['https://www.youtube.com/watch?v=comQ1-x2a1Q', 'https://www.youtube.com/watch?v=09TeUXjzpKs']
    },
    // Additional Frameworks and libraries
    laravel: {
        name: 'Laravel',
        docs: 'https://laravel.com/docs',
        official: 'https://laravel.com/',
        guides: ['https://laracasts.com/topics/laravel', 'https://www.geeksforgeeks.org/laravel-framework/'],
        videos: ['https://www.youtube.com/watch?v=ImtZ5yENzgE', 'https://www.youtube.com/watch?v=MFh0Fd7BsjE']
    },
    nodejs: {
        name: 'Node.js',
        docs: 'https://nodejs.org/en/docs/',
        official: 'https://nodejs.org/',
        guides: ['https://www.w3schools.com/nodejs/', 'https://www.geeksforgeeks.org/nodejs-tutorials/'],
        videos: ['https://www.youtube.com/watch?v=Oe421EPjeBE', 'https://www.youtube.com/watch?v=fBNz5xF-Kx4']
    },
    express: {
        name: 'Express.js',
        docs: 'https://expressjs.com/',
        official: 'https://expressjs.com/',
        guides: ['https://www.freecodecamp.org/news/tag/express/', 'https://www.tutorialspoint.com/expressjs/index.htm'],
        videos: ['https://www.youtube.com/watch?v=SccSCuHhOw0', 'https://www.youtube.com/watch?v=L72fhGm1tfE']
    },
    flutter: {
        name: 'Flutter',
        docs: 'https://docs.flutter.dev/',
        official: 'https://flutter.dev/',
        guides: ['https://dart.dev/guides', 'https://www.geeksforgeeks.org/flutter/'],
        videos: ['https://www.youtube.com/watch?v=VPvVD8t02U8', 'https://www.youtube.com/watch?v=x0uinJvhNxI']
    },
    vue: {
        name: 'Vue.js',
        docs: 'https://vuejs.org/guide/introduction.html',
        official: 'https://vuejs.org/',
        guides: ['https://www.w3schools.com/vue/', 'https://www.tutorialspoint.com/vuejs/index.htm'],
        videos: ['https://www.youtube.com/watch?v=FXpIoQ_rT_c', 'https://www.youtube.com/watch?v=YrxBCBibVo0']
    },
    nextjs: {
        name: 'Next.js',
        docs: 'https://nextjs.org/docs',
        official: 'https://nextjs.org/',
        guides: ['https://vercel.com/guides', 'https://www.freecodecamp.org/news/tag/nextjs/'],
        videos: ['https://www.youtube.com/watch?v=__mSgDEOyv8', 'https://www.youtube.com/watch?v=1WmNXEVia8I']
    },
    tensorflow: {
        name: 'TensorFlow',
        docs: 'https://www.tensorflow.org/',
        official: 'https://www.tensorflow.org/',
        guides: ['https://keras.io/', 'https://www.tensorflow.org/tutorials'],
        videos: ['https://www.youtube.com/watch?v=tPYj3fFJGjk', 'https://www.youtube.com/watch?v=Gv9_4yMHFhI']
    },
    nuxt: { name: 'Nuxt.js', docs: 'https://nuxtjs.org/docs', official: 'https://nuxtjs.org/', videos: ['https://www.youtube.com/results?search_query=Nuxt.js+tutorial'] },
    svelte: { name: 'Svelte', docs: 'https://svelte.dev/docs', official: 'https://svelte.dev/', videos: ['https://www.youtube.com/results?search_query=Svelte+tutorial'] },
    gatsby: { name: 'Gatsby', docs: 'https://www.gatsbyjs.com/docs/', official: 'https://www.gatsbyjs.com/', videos: ['https://www.youtube.com/results?search_query=Gatsby+tutorial'] },
    electron: { name: 'Electron', docs: 'https://www.electronjs.org/docs', official: 'https://www.electronjs.org/', videos: ['https://www.youtube.com/results?search_query=Electron+tutorial'] },
    tailwind: { name: 'Tailwind CSS', docs: 'https://tailwindcss.com/docs', official: 'https://tailwindcss.com/', videos: ['https://www.youtube.com/results?search_query=Tailwind+CSS+tutorial'] },
    bootstrap: { name: 'Bootstrap', docs: 'https://getbootstrap.com/docs/', official: 'https://getbootstrap.com/', videos: ['https://www.youtube.com/results?search_query=Bootstrap+tutorial'] },
    materialui: { name: 'Material UI', docs: 'https://mui.com/material-ui/getting-started/overview/', official: 'https://mui.com/', videos: ['https://www.youtube.com/results?search_query=Material+UI+tutorial'] },
    chakra: { name: 'Chakra UI', docs: 'https://chakra-ui.com/docs/getting-started', official: 'https://chakra-ui.com/', videos: ['https://www.youtube.com/results?search_query=Chakra+UI+tutorial'] },
    antd: { name: 'Ant Design', docs: 'https://ant.design/docs/react/introduce', official: 'https://ant.design/', videos: ['https://www.youtube.com/results?search_query=Ant+Design+tutorial'] },
    koa: { name: 'Koa', docs: 'https://koajs.com/#installation', official: 'https://koajs.com/', videos: ['https://www.youtube.com/results?search_query=Koa+tutorial'] },
    nestjs: { name: 'NestJS', docs: 'https://docs.nestjs.com/', official: 'https://nestjs.com/', videos: ['https://www.youtube.com/results?search_query=NestJS+tutorial'] },
    fastify: { name: 'Fastify', docs: 'https://www.fastify.io/docs/latest/', official: 'https://www.fastify.io/', videos: ['https://www.youtube.com/results?search_query=Fastify+tutorial'] },
    hapi: { name: 'hapi', docs: 'https://hapi.dev/tutorials/', official: 'https://hapi.dev/', videos: ['https://www.youtube.com/results?search_query=hapi+tutorial'] },
    springboot: { name: 'Spring Boot', docs: 'https://spring.io/projects/spring-boot', official: 'https://spring.io/', videos: ['https://www.youtube.com/results?search_query=Spring+Boot+tutorial'] },
    quarkus: { name: 'Quarkus', docs: 'https://quarkus.io/guides/', official: 'https://quarkus.io/', videos: ['https://www.youtube.com/results?search_query=Quarkus+tutorial'] },
    micronaut: { name: 'Micronaut', docs: 'https://micronaut.io/documentation.html', official: 'https://micronaut.io/', videos: ['https://www.youtube.com/results?search_query=Micronaut+tutorial'] },
    aspnet: { name: 'ASP.NET Core', docs: 'https://learn.microsoft.com/en-us/aspnet/core/', official: 'https://dotnet.microsoft.com/apps/aspnet', videos: ['https://www.youtube.com/results?search_query=ASP.NET+Core+tutorial'] },
    rails: { name: 'Ruby on Rails', docs: 'https://guides.rubyonrails.org/', official: 'https://rubyonrails.org/', videos: ['https://www.youtube.com/results?search_query=Ruby+on+Rails+tutorial'] },
    ember: { name: 'Ember.js', docs: 'https://guides.emberjs.com/', official: 'https://emberjs.com/', videos: ['https://www.youtube.com/results?search_query=Ember.js+tutorial'] },
    backbone: { name: 'Backbone.js', docs: 'https://backbonejs.org/', official: 'https://backbonejs.org/', videos: ['https://www.youtube.com/results?search_query=Backbone.js+tutorial'] },
    meteor: { name: 'Meteor', docs: 'https://www.meteor.com/tutorials', official: 'https://www.meteor.com/', videos: ['https://www.youtube.com/results?search_query=Meteor+tutorial'] },
    polymer: { name: 'Polymer', docs: 'https://polymer-library.polymer-project.org/3.0/docs/', official: 'https://www.polymer-project.org/', videos: ['https://www.youtube.com/results?search_query=Polymer+tutorial'] },
    alpine: { name: 'Alpine.js', docs: 'https://alpinejs.dev/start-here', official: 'https://alpinejs.dev/', videos: ['https://www.youtube.com/results?search_query=Alpine.js+tutorial'] },
    ionic: { name: 'Ionic', docs: 'https://ionicframework.com/docs', official: 'https://ionicframework.com/', videos: ['https://www.youtube.com/results?search_query=Ionic+tutorial'] }
    ,
    django: {
        name: 'Django',
        docs: 'https://docs.djangoproject.com/en/stable/',
        official: 'https://www.djangoproject.com/',
        guides: ['https://docs.djangoproject.com/en/stable/intro/tutorial01/'],
        videos: ['https://www.youtube.com/results?search_query=Django+tutorial']
    },
    flask: {
        name: 'Flask',
        docs: 'https://flask.palletsprojects.com/',
        official: 'https://palletsprojects.com/p/flask/',
        guides: ['https://flask.palletsprojects.com/en/latest/tutorial/'],
        videos: ['https://www.youtube.com/results?search_query=Flask+tutorial']
    },
    fastapi: {
        name: 'FastAPI',
        docs: 'https://fastapi.tiangolo.com/learn/?utm_source=chatgpt.com',
        official: 'https://fastapi.tiangolo.com/',
        guides: ['https://fastapi.tiangolo.com/tutorial/'],
        videos: ['https://www.youtube.com/results?search_query=FastAPI+tutorial']
    },
    pyramid: {
        name: 'Pyramid',
        docs: 'https://trypyramid.com/',
        official: 'https://trypyramid.com/',
        videos: ['https://www.youtube.com/results?search_query=Pyramid+python+tutorial']
    },
    tornado: {
        name: 'Tornado',
        docs: 'https://www.tornadoweb.org/',
        official: 'https://www.tornadoweb.org/en/stable/',
        videos: ['https://www.youtube.com/results?search_query=Tornado+python+tutorial']
    },
    cherrypy: {
        name: 'CherryPy',
        docs: 'https://cherrypy.org/',
        official: 'https://cherrypy.org/',
        videos: ['https://www.youtube.com/results?search_query=CherryPy+tutorial']
    },
    bottle: {
        name: 'Bottle',
        docs: 'https://bottlepy.org/',
        official: 'https://bottlepy.org/docs/dev/',
        videos: ['https://www.youtube.com/results?search_query=Bottle+python+tutorial']
    }
};

// --- External site domains & generator (100+ sites) ---
// A generic generator that creates search links on many popular documentation/tutorial sites.
const siteDomains = [
    'developer.mozilla.org', 'www.w3schools.com', 'stackoverflow.com', 'github.com', 'docs.microsoft.com',
    'docs.python.org', 'docs.oracle.com', 'en.cppreference.com', 'isocpp.org', 'www.php.net',
    'ruby-doc.org', 'golang.org', 'doc.rust-lang.org', 'kotlinlang.org', 'swift.org',
    'developer.android.com', 'developer.apple.com', 'react.dev', 'vuejs.org', 'angular.io',
    'nextjs.org', 'nuxtjs.org', 'svelte.dev', 'deno.land', 'nodejs.org',
    'expressjs.com', 'spring.io', 'docs.spring.io', 'laravel.com', 'symfony.com',
    'flask.palletsprojects.com', 'docs.djangoproject.com', 'learn.microsoft.com', 'kubernetes.io', 'docker.com',
    'cloud.google.com', 'aws.amazon.com', 'azure.microsoft.com', 'mongodb.com', 'redis.io',
    'www.postgresql.org', 'www.mysql.com', 'www.sqlite.org', 'www.elastic.co', 'kafka.apache.org',
    'hadoop.apache.org', 'spark.apache.org', 'tensorflow.org', 'pytorch.org', 'keras.io',
    'scikit-learn.org', 'pandas.pydata.org', 'numpy.org', 'matplotlib.org', 'seaborn.pydata.org',
    'freecodecamp.org', 'codecademy.com', 'coursera.org', 'edx.org', 'udemy.com',
    'pluralsight.com', 'tutorialspoint.com', 'geeksforgeeks.org', 'devdocs.io', 'medium.com',
    'dev.to', 'hashnode.com', 'digitalocean.com', 'linode.com', 'heroku.com',
    'netlify.com', 'vercel.com', 'git-scm.com', 'jestjs.io', 'owasp.org',
    'mozilla.org', 'www.w3.org', 'caniuse.com', 'www.tutorialrepublic.com', 'www.tutorialsteacher.com',
    'www.toptal.com', 'www.redhat.com', 'www.jetbrains.com', 'docs.docker.com', 'circleci.com',
    'travis-ci.org', 'gitlab.com', 'docs.gitlab.com', 'www.selenium.dev', 'play.google.com',
    'apps.apple.com', 'www.ruby-lang.org', 'www.php.net', 'www.eclipse.org', 'www.apache.org',
    'www.digitalocean.com/community', 'www.baeldung.com', 'www.javatpoint.com', 'www.tutorialkart.com',
    'www.educative.io', 'www.smashingmagazine.com', 'addyosmani.com', 'css-tricks.com', 'alistapart.com',
    'www.sitepoint.com', 'www.w3resource.com', 'www.programiz.com', 'www.springer.com', 'www.ibm.com',
    'www.oracle.com', 'www.golang.org', 'www.rust-lang.org'
];

function generateExternalLinks(languageKey, title, linksPerDoc = 25) {
    // Build a query for searching the site; prefer title + language for relevance
    const query = encodeURIComponent((title + ' ' + languageKey).trim());
    const links = [];

    // Include core official links first if available
    const core = languageLinks[languageKey];
    if (core) {
        if (core.docs) links.push(core.docs);
        if (core.official) links.push(core.official);
        if (core.w3schools) links.push(core.w3schools);
        if (core.videos && core.videos.length) links.push(core.videos[0]);
    }

    // Generate links by combining domain search endpoints with the query
    for (let i = 0; links.length < linksPerDoc; i++) {
        const domain = siteDomains[i % siteDomains.length];
        // Use common search query patterns; many sites support '?q=' or '/search?q='
        const patterns = [
            `https://${domain}/search?q=${query}`,
            `https://${domain}/?s=${query}`,
            `https://${domain}/search?query=${query}`,
            `https://${domain}/search/${query}`
        ];
        // Cycle through patterns to increase variety
        links.push(patterns[i % patterns.length]);
    }

    // Deduplicate while preserving order
    return [...new Set(links)];
}

// Database of clean programming documents  
const documents = [
    // HTML Documents
    { id: 1, language: 'html', title: 'HTML Basics', content: 'DOCTYPE html - Root element. head - Contains metadata. body - Contains page content. Tags organize structure.', filename: 'html_basics.html', docs: languageLinks.html },
    { id: 2, language: 'html', title: 'HTML Tags', content: 'div - Container. p - Paragraph. span - Inline element. a - Link. img - Image. button - Interactive element.', filename: 'html_tags.html', docs: languageLinks.html },
    { id: 3, language: 'html', title: 'HTML Forms', content: 'form - Form container. input - Input field. textarea - Multi-line text. select - Dropdown. button - Submit.', filename: 'html_forms.html', docs: languageLinks.html },
    { id: 4, language: 'html', title: 'HTML Semantic', content: 'header - Page header. nav - Navigation. main - Main content. article - Article. footer - Footer. section - Section.', filename: 'html_semantic.html', docs: languageLinks.html },
    { id: 5, language: 'html', title: 'HTML Meta Tags', content: 'meta charset - Character encoding. viewport - Responsive. description - Page description for SEO.', filename: 'html_meta.html', docs: languageLinks.html },
    { id: 6, language: 'html', title: 'HTML Tables', content: 'table - Container. tr - Row. td - Data cell. th - Header cell. thead - thead. tbody - tbody. tfoot - tfoot.', filename: 'html_tables.html', docs: languageLinks.html },
    { id: 7, language: 'html', title: 'HTML Lists', content: 'ul - Unordered list. ol - Ordered list. li - List item. dl - Definition list. dt - Term. dd - Definition.', filename: 'html_lists.html', docs: languageLinks.html },
    { id: 8, language: 'html', title: 'HTML Links', content: 'a href - Hyperlink. target blank - New tab. id - Fragment. rel nofollow - SEO attribute for links.', filename: 'html_links.html', docs: languageLinks.html },
    { id: 9, language: 'html', title: 'HTML Media', content: 'img - Image element. audio - Audio player. video - Video player. source - Media source. iframe - Embed.', filename: 'html_media.html', docs: languageLinks.html },
    { id: 10, language: 'html', title: 'HTML5 Features', content: 'Canvas for graphics, SVG vectors, Local storage, Geolocation, Web workers, Service workers, Offline support.', filename: 'html5_features.html', docs: languageLinks.html },
    
    // CSS Documents
    { id: 11, language: 'css', title: 'CSS Box Model', content: 'margin - Outer spacing. padding - Inner spacing. border - Element border. content - Core. border-box for sizing.', filename: 'css_box_model.css', docs: languageLinks.css },
    { id: 12, language: 'css', title: 'CSS Flexbox', content: 'display flex - Enable flexbox. justify-content - Horizontal. align-items - Vertical. flex-direction. flex-wrap.', filename: 'css_flexbox.css', docs: languageLinks.css },
    { id: 13, language: 'css', title: 'CSS Grid', content: 'display grid - Enable. grid-template-columns - Columns. grid-template-rows - Rows. gap - Spacing. grid-area.', filename: 'css_grid.css', docs: languageLinks.css },
    { id: 14, language: 'css', title: 'CSS Colors and Fonts', content: 'color - Text color. background-color - Background. font-family - Font type. font-size - Text size. line-height.', filename: 'css_colors_fonts.css', docs: languageLinks.css },
    { id: 15, language: 'css', title: 'CSS Animations', content: 'transition - Smooth change. keyframes - Animation frames. animation - Apply. transform - Scale rotate. opacity.', filename: 'css_animations.css', docs: languageLinks.css },
    { id: 16, language: 'css', title: 'CSS Selectors', content: 'Element - div. Class - .class. ID - #id. Attribute - type=text. Pseudo-class - hover focus active.', filename: 'css_selectors.css', docs: languageLinks.css },
    { id: 17, language: 'css', title: 'CSS Positioning', content: 'static - Default. relative - Normal. absolute - Parent. fixed - Viewport. sticky - Hybrid positioning mode.', filename: 'css_positioning.css', docs: languageLinks.css },
    { id: 18, language: 'css', title: 'CSS Media Queries', content: 'media screen max-width - Responsive. Mobile first. Print stylesheets. Orientation detection. Breakpoints.', filename: 'css_media_queries.css', docs: languageLinks.css },
    { id: 19, language: 'css', title: 'CSS Gradients', content: 'linear-gradient - Linear. radial-gradient - Radial. conic-gradient - Conic. Multiple colors and angles.', filename: 'css_gradients.css', docs: languageLinks.css },
    { id: 20, language: 'css', title: 'CSS Effects', content: 'box-shadow - Shadow. text-shadow - Text shadow. filter - Effects. blur brightness contrast grayscale.', filename: 'css_shadow.css', docs: languageLinks.css },
    
    // JavaScript Documents
    { id: 21, language: 'javascript', title: 'JavaScript Variables', content: 'var - Function scope. let - Block scope. const - Constant. Use let or const. Variables must be declared.', filename: 'js_variables.js', docs: languageLinks.javascript },
    { id: 22, language: 'javascript', title: 'JavaScript Functions', content: 'function name() - Declaration. () => - Arrow. function* - Generator. Parameters and return. Closures.', filename: 'js_functions.js', docs: languageLinks.javascript },
    { id: 23, language: 'javascript', title: 'JavaScript Arrays', content: 'Array literal. push() - Add. pop() - Remove. map() - Transform. filter() - Select. reduce() - Aggregate.', filename: 'js_arrays.js', docs: languageLinks.javascript },
    { id: 24, language: 'javascript', title: 'JavaScript Objects', content: 'Object literal. Property access. Bracket notation. Object.keys(). Spread operator. Methods and properties.', filename: 'js_objects.js', docs: languageLinks.javascript },
    { id: 25, language: 'javascript', title: 'JavaScript DOM', content: 'getElementById() - Get by ID. querySelector() - CSS. innerHTML - Set HTML. addEventListener() - Events. classList.', filename: 'js_dom.js', docs: languageLinks.javascript },
    { id: 26, language: 'javascript', title: 'JavaScript Async', content: 'async function - Async. await - Wait. try catch - Errors. Promise - Operation. fetch() - HTTP requests.', filename: 'js_async.js', docs: languageLinks.javascript },
    { id: 27, language: 'javascript', title: 'JavaScript Loops', content: 'for - Traditional. while - Conditional. do while - Execute first. for of - Values. for in - Keys. forEach.', filename: 'js_loops.js', docs: languageLinks.javascript },
    { id: 28, language: 'javascript', title: 'JavaScript Conditionals', content: 'if else - Branch. switch - Multiple. Ternary - Compact. Logical operators. Truthy falsy values.', filename: 'js_conditionals.js', docs: languageLinks.javascript },
    { id: 29, language: 'javascript', title: 'JavaScript Strings', content: 'charAt() - Character. slice() - Substring. split() - Array. toUpperCase toLowerCase(). indexOf includes().', filename: 'js_strings.js', docs: languageLinks.javascript },
    { id: 30, language: 'javascript', title: 'JavaScript Events', content: 'click - Mouse click. keydown keyup - Keyboard. mouseover - Mouse over. change - Form. submit - Submit.', filename: 'js_events.js', docs: languageLinks.javascript },
    { id: 31, language: 'javascript', title: 'JavaScript Classes', content: 'class name - Declaration. constructor() - Method. this - Reference. extends - Inheritance. static - Static.', filename: 'js_classes.js', docs: languageLinks.javascript },
    { id: 32, language: 'javascript', title: 'JavaScript Modules', content: 'import - Import. export - Export. ES6 modules. CommonJS. Default export. Named exports. Webpack bundler.', filename: 'js_modules.js', docs: languageLinks.javascript },
    
    // General Documents
    { id: 33, language: 'general', title: 'Web Development', content: 'HTML - Structure. CSS - Styling. JavaScript - Interactivity. Learn fundamentals first. Practice building.', filename: 'web_basics.txt', docs: { docs: 'https://developer.mozilla.org/en-US/docs/', videos: ['https://www.youtube.com/results?search_query=web+development+tutorial'] } },
    { id: 34, language: 'general', title: 'Frontend Guide', content: 'Master HTML CSS JavaScript. Responsive design. Git version control. Code regularly. Build projects.', filename: 'frontend_guide.txt', docs: { docs: 'https://developer.mozilla.org/en-US/docs/', videos: ['https://www.youtube.com/results?search_query=frontend+development+tutorial'] } },
    { id: 35, language: 'general', title: 'ES6 Features', content: 'Arrow functions. Classes. Template literals. Destructuring. Spread operator. let const. Promises.', filename: 'es6_features.txt', docs: languageLinks.javascript },
    { id: 36, language: 'general', title: 'Programming Concepts', content: 'Variables store data. Functions organize. Loops repeat. Conditionals decide. Arrays collect. Objects group.', filename: 'programming_concepts.txt', docs: { docs: 'https://www.codecademy.com/learn/programming', videos: ['https://www.youtube.com/results?search_query=programming+concepts'] } },
    { id: 37, language: 'general', title: 'Best Practices', content: 'Clean code. Meaningful names. Comments. Small functions. DRY principle. Test code. Documentation.', filename: 'best_practices.txt', docs: { docs: 'https://google.github.io/styleguide/', videos: ['https://www.youtube.com/results?search_query=coding+best+practices'] } },
    { id: 38, language: 'general', title: 'Version Control Git', content: 'git init. git add. git commit. git push. git pull. Branches. Merge. Remote repositories. History.', filename: 'git_guide.txt', docs: { docs: 'https://git-scm.com/doc', videos: ['https://www.youtube.com/results?search_query=git+tutorial'] } },
    { id: 39, language: 'general', title: 'Debugging', content: 'console.log debugging. Browser DevTools. Breakpoints. Step through. Network requests. Validate code.', filename: 'debugging.txt', docs: languageLinks.javascript },
    { id: 40, language: 'general', title: 'API Integration', content: 'REST API. HTTP GET POST PUT DELETE. JSON. fetch() requests. Handle responses. Error handling.', filename: 'api_guide.txt', docs: { docs: 'https://developer.mozilla.org/en-US/docs/Web/API', videos: ['https://www.youtube.com/results?search_query=REST+API+tutorial'] } },
    { id: 41, language: 'general', title: 'Responsive Design', content: 'Mobile first. Media queries. Flexible layouts. Fluid images. Breakpoints. Device testing. Viewport.', filename: 'responsive_design.txt', docs: languageLinks.css },
    { id: 42, language: 'general', title: 'Web Performance', content: 'Minify CSS JavaScript. Compress images. Lazy loading. Caching. CDN. Reduce requests. Optimize.', filename: 'performance.txt', docs: { docs: 'https://developer.mozilla.org/en-US/docs/Web/Performance', videos: ['https://www.youtube.com/results?search_query=web+performance+optimization'] } },
    { id: 43, language: 'general', title: 'Security', content: 'HTTPS encryption. SQL injection prevention. XSS protection. CSRF tokens. Password hashing. Input validation.', filename: 'security.txt', docs: { docs: 'https://owasp.org/www-project-web-security-testing-guide/', videos: ['https://www.youtube.com/results?search_query=web+security+tutorial'] } },
    { id: 44, language: 'general', title: 'SEO Optimization', content: 'Meta tags. Semantic HTML. Alt text. URL structure. Sitemap. Robots.txt. Mobile optimization.', filename: 'seo.txt', docs: languageLinks.html },
    { id: 45, language: 'general', title: 'Testing', content: 'Unit testing. Integration testing. End to end. Test coverage. Mock objects. Jest Mocha. CI.', filename: 'testing.txt', docs: { docs: 'https://jestjs.io/docs/getting-started', videos: ['https://www.youtube.com/results?search_query=unit+testing+javascript'] } },
    { id: 46, language: 'general', title: 'Databases', content: 'SQL MySQL PostgreSQL. NoSQL MongoDB. CRUD operations. Relationships. Indexes. Backup strategies.', filename: 'database.txt', docs: languageLinks.sql },
    { id: 47, language: 'general', title: 'Deployment', content: 'Hosting provider. Heroku Netlify Vercel. GitHub Pages. Domain. SSL. Monitoring. Logs and tracking.', filename: 'deployment.txt', docs: { docs: 'https://www.netlify.com/blog/', videos: ['https://www.youtube.com/results?search_query=website+deployment+tutorial'] } },
    { id: 48, language: 'general', title: 'Learning Resources', content: 'MDN Web Docs. W3Schools. Codecademy. FreeCodeCamp. YouTube. Documentation. Projects. Stack Overflow.', filename: 'resources.txt', docs: { docs: 'https://developer.mozilla.org/en-US/docs/', videos: ['https://www.youtube.com/results?search_query=programming+tutorials'] } },
    
    // Frontend Frameworks
    { id: 49, language: 'react', title: 'React Basics', content: 'React library for UI. Components reusable. JSX syntax. Props parameters. State management. Hooks. Virtual DOM.', filename: 'react_basics.jsx', docs: languageLinks.react },
    { id: 50, language: 'react', title: 'React Hooks', content: 'useState - State. useEffect - Side effects. useContext - Context. useReducer - Reducer. Custom hooks.', filename: 'react_hooks.jsx', docs: languageLinks.react },
    { id: 51, language: 'vue', title: 'Vue.js Basics', content: 'Vue framework. Templates. Directives v-if v-for. Reactivity. Methods. Computed properties. Watchers.', filename: 'vue_basics.vue', docs: languageLinks.vue },
    { id: 52, language: 'angular', title: 'Angular Basics', content: 'Angular framework. Modules components. Decorators. Dependency injection. Services. RxJS observables.', filename: 'angular_basics.ts', docs: languageLinks.angular },
    { id: 53, language: 'nodejs', title: 'Node.js Basics', content: 'Node.js runtime. npm packages. require import. fs module. Events. Streams. Buffer. Callbacks promises.', filename: 'nodejs_basics.js', docs: languageLinks.nodejs },
    { id: 54, language: 'express', title: 'Express Framework', content: 'Express.js web framework. Routes middleware. Request response. Static files. Error handling. CORS.', filename: 'express_basics.js', docs: languageLinks.express },
    { id: 55, language: 'django', title: 'Django Framework', content: 'Django Python framework. Models views templates. ORM database. Admin interface. Authentication. Middleware.', filename: 'django_basics.py', docs: languageLinks.django },
    { id: 56, language: 'flask', title: 'Flask Framework', content: 'Flask lightweight Python. Routes decorators. Templates Jinja2. Request handling. Database integration. RESTful APIs.', filename: 'flask_basics.py', docs: languageLinks.flask },
    { id: 57, language: 'nextjs', title: 'Next.js Framework', content: 'Next.js React framework. Server-side rendering. Static generation. API routes. File-based routing. Optimization.', filename: 'nextjs_basics.jsx', docs: languageLinks.nextjs },
    { id: 58, language: 'typescript', title: 'TypeScript Basics', content: 'TypeScript typed JavaScript. Types interfaces. Classes generics. Modules decorators. Type checking. Compilation.', filename: 'typescript_basics.ts', docs: languageLinks.typescript },
    { id: 59, language: 'python', title: 'Python Basics', content: 'Python language. Variables functions. Lists dictionaries. Loops conditionals. Modules packages. Error handling.', filename: 'python_basics.py', docs: languageLinks.python },
    { id: 60, language: 'mongodb', title: 'MongoDB Database', content: 'MongoDB NoSQL document database. Collections documents. BSON. Queries. Indexes. Aggregation. Transactions.', filename: 'mongodb_basics.md', docs: languageLinks.mongodb },
    { id: 61, language: 'postgresql', title: 'PostgreSQL Database', content: 'PostgreSQL relational database. SQL queries. Schemas tables. Indexes. Transactions. JSON JSONB. Extensions.', filename: 'postgresql_basics.sql', docs: languageLinks.postgresql },
    { id: 62, language: 'docker', title: 'Docker Containers', content: 'Docker containerization. Images containers. Dockerfile. Volumes networks. Docker Compose. Registry. Deployment.', filename: 'docker_basics.md', docs: languageLinks.docker },
    { id: 63, language: 'kubernetes', title: 'Kubernetes Orchestration', content: 'Kubernetes container orchestration. Pods services. Deployments. ConfigMaps secrets. Ingress. Namespaces. Helm.', filename: 'kubernetes_basics.md', docs: languageLinks.kubernetes },
    { id: 64, language: 'aws', title: 'AWS Cloud Services', content: 'AWS cloud platform. EC2 instances. S3 storage. RDS databases. Lambda functions. CloudFront CDN. IAM security.', filename: 'aws_basics.md', docs: languageLinks.aws },
    { id: 65, language: 'tensorflow', title: 'TensorFlow ML', content: 'TensorFlow machine learning. Tensors operations. Neural networks. Models training. Keras API. Deployment.', filename: 'tensorflow_basics.py', docs: languageLinks.tensorflow },
    { id: 66, language: 'react', title: 'React Router', content: 'React Router navigation. Routes Link. Dynamic routing. Route parameters. Nested routes. Query strings.', filename: 'react_router.jsx', docs: languageLinks.react },
    { id: 67, language: 'react', title: 'React State Management', content: 'Redux state container. Actions reducers. Store dispatch. Redux Toolkit. Context API. Zustand alternative.', filename: 'react_state.jsx', docs: languageLinks.react },
    { id: 68, language: 'nodejs', title: 'Node Package Manager', content: 'npm package manager. package.json. install update remove. scripts. Versions semver. Global packages.', filename: 'npm_guide.md', docs: languageLinks.nodejs },
    
    // New Programming Languages (C, C#, PHP, Kotlin, Go, Ruby, Swift)
    { id: 69, language: 'c', title: 'C Programming Language', content: 'C procedural language. Pointers memory. Functions. File handling. Structures. Preprocessor. Low-level access. Efficient.', filename: 'c_basics.c', docs: languageLinks.c },
    { id: 70, language: 'c', title: 'C Memory Management', content: 'malloc() - Allocate. free() - Deallocate. pointers - References. arrays. Strings. Segmentation faults. Stack vs heap.', filename: 'c_memory.c', docs: languageLinks.c },
    { id: 71, language: 'csharp', title: 'C# Language Basics', content: 'C# object-oriented. Classes properties. Methods inheritance. Interfaces. LINQ queries. Async await. .NET Framework.', filename: 'csharp_basics.cs', docs: languageLinks.csharp },
    { id: 72, language: 'csharp', title: 'C# Advanced Concepts', content: 'Delegates events. Generics. Reflection. Dependency injection. SOLID principles. Entity Framework. WebAPI.', filename: 'csharp_advanced.cs', docs: languageLinks.csharp },
    { id: 73, language: 'php', title: 'PHP Web Development', content: 'PHP server-side. $_GET $_POST superglobals. Sessions cookies. Database queries. Form handling. File upload. MySQLi PDO.', filename: 'php_basics.php', docs: languageLinks.php },
    { id: 74, language: 'php', title: 'PHP Functions and OOP', content: 'Custom functions. Closures. Classes objects. Inheritance polymorphism. Static properties. Namespaces. Autoloading.', filename: 'php_oop.php', docs: languageLinks.php },
    { id: 75, language: 'kotlin', title: 'Kotlin Language Basics', content: 'Kotlin concise syntax. Null safety. Extension functions. Data classes. Coroutines. Android development. Interoperability with Java.', filename: 'kotlin_basics.kt', docs: languageLinks.kotlin },
    { id: 76, language: 'kotlin', title: 'Kotlin for Android', content: 'Android studio. Activities fragments. Lifecycle. RecyclerView lists. Retrofit API. Room database. Material design.', filename: 'kotlin_android.kt', docs: languageLinks.kotlin },
    { id: 77, language: 'go', title: 'Go Programming Basics', content: 'Go compiled language. Goroutines concurrency. Channels communication. Packages imports. Error handling. Interfaces.', filename: 'go_basics.go', docs: languageLinks.go },
    { id: 78, language: 'go', title: 'Go Web Development', content: 'HTTP servers routing. JSON marshaling. Templates. Middleware. Testing. Deployment. Cloud functions. Docker.', filename: 'go_web.go', docs: languageLinks.go },
    { id: 79, language: 'ruby', title: 'Ruby Language Basics', content: 'Ruby dynamic language. Variables. Methods blocks. String manipulation. Collections arrays hashes. Regular expressions.', filename: 'ruby_basics.rb', docs: languageLinks.ruby },
    { id: 80, language: 'ruby', title: 'Ruby on Rails Framework', content: 'Rails MVC architecture. Models views controllers. Database migrations. Active Record. Routing. RESTful APIs. Deployment.', filename: 'ruby_rails.rb', docs: languageLinks.ruby },
    { id: 81, language: 'swift', title: 'Swift iOS Development', content: 'Swift type-safe language. SwiftUI declarative. UIKit. ViewControllers. Networking. CoreData persistence. App store publishing.', filename: 'swift_ios.swift', docs: languageLinks.swift },
    { id: 82, language: 'swift', title: 'Swift Advanced Topics', content: 'Optionals unwrapping. Protocols. Extensions. Generics. Memory management ARC. Closures. Concurrency async await.', filename: 'swift_advanced.swift', docs: languageLinks.swift },
    
    // New Frameworks
    { id: 83, language: 'laravel', title: 'Laravel PHP Framework', content: 'Laravel elegant syntax. Routes middleware. Eloquent ORM. Blade templates. Authentication. Database migrations. API development.', filename: 'laravel_basics.php', docs: languageLinks.laravel },
    { id: 84, language: 'laravel', title: 'Laravel Advanced Features', content: 'Queue jobs. Event listeners. File storage. Mail sending. Redis caching. Real-time broadcasting. Testing with PHPUnit.', filename: 'laravel_advanced.php', docs: languageLinks.laravel },
    { id: 85, language: 'nodejs', title: 'Node.js Core Modules', content: 'fs - File system. path - Paths. events - Event emitter. stream - Streaming. util - Utilities. buffer - Binary data.', filename: 'nodejs_modules.js', docs: languageLinks.nodejs },
    { id: 86, language: 'nodejs', title: 'Node.js REST APIs', content: 'Express server setup. RESTful endpoints. Middleware. Body parsing. Error handling. CORS. Authentication JWT. Database integration.', filename: 'nodejs_api.js', docs: languageLinks.nodejs },
    { id: 87, language: 'express', title: 'Express.js Framework', content: 'Express routing. Middleware chain. Request response. Error handling. Session management. Static files. Template engines.', filename: 'express_basics.js', docs: languageLinks.express },
    { id: 88, language: 'express', title: 'Express Advanced Patterns', content: 'Custom middleware. Route parameters. Query strings. File uploads. Rate limiting. Logging. Security headers. Testing.', filename: 'express_advanced.js', docs: languageLinks.express },
    { id: 89, language: 'flutter', title: 'Flutter Cross-Platform Mobile', content: 'Dart language. Widgets UI building. Hot reload development. State management. Navigation routing. API integration.', filename: 'flutter_basics.dart', docs: languageLinks.flutter },
    { id: 90, language: 'flutter', title: 'Flutter Advanced Development', content: 'Provider BLoC patterns. Database with SQLite. Animations. Native plugins. Platform channels. Deployment. AppStore GooglePlay.', filename: 'flutter_advanced.dart', docs: languageLinks.flutter },
    { id: 91, language: 'vue', title: 'Vue.js Framework Basics', content: 'Vue reactive data binding. Components composition. Templates directives. Event handling. Props emit. Lifecycle hooks.', filename: 'vue_basics.vue', docs: languageLinks.vue },
    { id: 92, language: 'vue', title: 'Vue.js Advanced Features', content: 'Vue Router navigation. State management Vuex Pinia. Composition API. Custom hooks. SSR. Testing. Performance optimization.', filename: 'vue_advanced.vue', docs: languageLinks.vue },
    { id: 93, language: 'nextjs', title: 'Next.js Full Stack', content: 'Next.js React framework. File-based routing. Server components. Static generation SSG. Incremental regeneration ISR. API routes.', filename: 'nextjs_fullstack.jsx', docs: languageLinks.nextjs },
    { id: 94, language: 'nextjs', title: 'Next.js Production Patterns', content: 'Authentication. Database integration Prisma. Deployment Vercel. Environment variables. SEO optimization. Image optimization.', filename: 'nextjs_production.jsx', docs: languageLinks.nextjs },
    { id: 95, language: 'tensorflow', title: 'TensorFlow Machine Learning', content: 'TensorFlow library. Tensors operations. Building neural networks. Keras high-level API. Training models. Callbacks monitoring.', filename: 'tensorflow_ml.py', docs: languageLinks.tensorflow },
    { id: 96, language: 'tensorflow', title: 'TensorFlow Advanced Topics', content: 'Custom layers models. Transfer learning. Data augmentation. GPU optimization. Model deployment. Serving TensorFlow Lite.', filename: 'tensorflow_advanced.py', docs: languageLinks.tensorflow }
];

// Global variables
let currentResults = [];
let currentPage = 1;
const resultsPerPage = 10;
let selectedLanguages = ['all'];
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
let totalSearches = JSON.parse(localStorage.getItem('totalSearches')) || 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateStats();
    loadSettings();
    displayHistory();
    // Initialize authentication UI (login/signup state)
    if (typeof initAuthUI === 'function') initAuthUI();
    // Populate generated external links for each document (adds many external resources)
    populateExternalLinks();
});

// Populate externalLinks on each document using the generator
function populateExternalLinks() {
    try {
        documents.forEach(doc => {
            // generate ~25 links per document by default to exceed 1000 total across corpus
            doc.externalLinks = generateExternalLinks(doc.language, doc.title, 25);
        });
    } catch (e) {
        console.error('populateExternalLinks error', e);
    }
}

// Open a new window/tab with a simple HTML page listing all external links for a document
function showAllExternalLinks(docId) {
    const doc = documents.find(d => d.id === docId);
    if (!doc || !doc.externalLinks) return alert('No external resources available');

    const html = ['<html><head><title>Resources for ', escapeHtml(doc.title), '</title>',
        '<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
        '<style>body{font-family:sans-serif;padding:20px} a{display:block;margin:6px 0;color:#0b66c3}</style>',
        '</head><body>'];
    html.push('<h2>' + escapeHtml(doc.title) + ' — Resources</h2>');
    html.push('<ul>');
    doc.externalLinks.forEach(link => {
        const safe = link.replace(/"/g, '%22');
        html.push('<li><a href="' + safe + '" target="_blank" rel="noopener">' + escapeHtml(link) + '</a></li>');
    });
    html.push('</ul>');
    html.push('</body></html>');

    const w = window.open();
    if (w) {
        w.document.open();
        w.document.write(html.join(''));
        w.document.close();
    } else {
        // Fallback: open first link
        window.open(doc.externalLinks[0], '_blank');
    }
}

// Show page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'home') {
        document.getElementById('searchInput').focus();
    }
}

// Search functionality
function performSearch() {
    const query = document.getElementById('searchInput').value || document.getElementById('resultsInput').value;
    if (!query.trim()) {
        alert('Please enter a search query');
        return;
    }
    executeSearch(query);
}

// Advanced search handler (wired to advanced page button)
function performAdvancedSearch() {
    const qEl = document.getElementById('advancedQuery');
    const langEl = document.getElementById('advancedLanguage');
    const frameworkEl = document.getElementById('advancedFramework');
    const typeEl = document.getElementById('searchType');
    const sortEl = document.getElementById('sortBy');
    const tagsEl = document.getElementById('advancedTags');

    if (!qEl || !langEl || !frameworkEl || !typeEl || !sortEl || !tagsEl) {
        alert('Advanced search form is not available');
        return;
    }

    const rawQuery = qEl.value.trim();
    const language = langEl.value.trim();
    const framework = frameworkEl.value.trim();
    const searchType = typeEl.value;
    const sortBy = sortEl.value;
    const tags = tagsEl.value.trim();

    // Prepare search scope
    if (language) selectedLanguages = [language];
    else selectedLanguages = ['all'];

    // Build the effective query (include tags)
    const effectiveQuery = ((rawQuery ? rawQuery + ' ' : '') + (tags ? tags : '')).trim();

    // If there is no textual query but filters are set, run a broad filter
    if (!effectiveQuery) {
        // Filter documents by language/framework only
        currentResults = documents.filter(doc => {
            const matchesLang = (selectedLanguages.includes('all') || selectedLanguages.includes(doc.language));
            const matchesFramework = !framework || doc.language === framework || (doc.title + ' ' + doc.content).toLowerCase().includes(framework.toLowerCase());
            return matchesLang && matchesFramework;
        });
    } else {
        // Execute a normal search first to get relevance scoring
        executeSearch(effectiveQuery);

        // executeSearch already navigates to results and populates currentResults; apply additional filters below
        // Filter by framework if provided
        if (framework) {
            currentResults = currentResults.filter(doc => doc.language === framework || (doc.title + ' ' + doc.content).toLowerCase().includes(framework.toLowerCase()));
        }

        // Apply searchType constraints
        if (searchType === 'exact') {
            const qLow = rawQuery.toLowerCase();
            currentResults = currentResults.filter(doc => doc.title.toLowerCase() === qLow || doc.content.toLowerCase() === qLow);
        } else if (searchType === 'startswith') {
            const qLow = rawQuery.toLowerCase();
            currentResults = currentResults.filter(doc => doc.title.toLowerCase().startsWith(qLow) || doc.content.toLowerCase().startsWith(qLow));
        } else if (searchType === 'endswith') {
            const qLow = rawQuery.toLowerCase();
            currentResults = currentResults.filter(doc => doc.title.toLowerCase().endsWith(qLow) || doc.content.toLowerCase().endsWith(qLow));
        } else if (searchType === 'regex') {
            try {
                const re = new RegExp(rawQuery, 'i');
                currentResults = currentResults.filter(doc => re.test(doc.title) || re.test(doc.content));
            } catch (e) {
                alert('Invalid regular expression');
            }
        }
    }

    // Sorting
    if (sortBy === 'alphabetical') {
        currentResults.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'popularity') {
        // Use number of external links as a simple popularity proxy
        currentResults.sort((a, b) => (b.externalLinks ? b.externalLinks.length : 0) - (a.externalLinks ? a.externalLinks.length : 0));
    } else if (sortBy === 'date') {
        // No real date metadata; fallback to relevance
        currentResults.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    } else if (sortBy === 'complexity') {
        // No complexity metric available; keep relevance order
        currentResults.sort((a, b) => (b.relevance || 0) - (a.relevance || 0));
    }

    // Reset pagination and show results
    currentPage = 1;
    showPage('results');
    displayResults();
}

function searchQuery(query) {
    document.getElementById('searchInput').value = query;
    executeSearch(query);
}

function executeSearch(query) {
    const languageFilter = selectedLanguages.includes('all') ? null : selectedLanguages;
    
    // First pass: strict exact/substring matching
    currentResults = documents.filter(doc => {
        const matchesQuery = searchDocumentFuzzy(query, doc);
        const matchesLanguage = !languageFilter || languageFilter.includes(doc.language);
        return matchesQuery && matchesLanguage;
    });
    
    // Calculate relevance for exact matches
    currentResults.forEach(doc => {
        let relevance = 0;
        const queryLower = query.toLowerCase();
        const titleLower = doc.title.toLowerCase();
        const contentLower = doc.content.toLowerCase();
        
        if (titleLower === queryLower) relevance += 100;
        if (titleLower.startsWith(queryLower)) relevance += 50;
        if (titleLower.includes(queryLower)) relevance += 30;
        if (contentLower.includes(queryLower)) relevance += 10;
        
        const keywords = query.toLowerCase().split(' ');
        keywords.forEach(kw => {
            if (kw.length > 2) {
                if (titleLower.includes(kw)) relevance += 15;
                if (contentLower.includes(kw)) relevance += 5;
            }
        });
        
        doc.relevance = relevance;
    });
    
    currentResults.sort((a, b) => b.relevance - a.relevance);
    
    // If very few results, try fuzzy matching with higher threshold
    if (currentResults.length < 3) {
        const fuzzyResults = documents.filter(doc => {
            const matchesLanguage = !languageFilter || languageFilter.includes(doc.language);
            const score = calculateFuzzyScore(query.toLowerCase(), doc);
            // Check if already in results
            const alreadyIncluded = currentResults.find(r => r.id === doc.id);
            return !alreadyIncluded && score > 50 && matchesLanguage;
        });
        
        fuzzyResults.forEach(doc => {
            doc.fuzzyScore = calculateFuzzyScore(query.toLowerCase(), doc);
        });
        
        fuzzyResults.sort((a, b) => b.fuzzyScore - a.fuzzyScore);
        currentResults = currentResults.concat(fuzzyResults.slice(0, 5));
    }
    
    addToHistory(query, currentResults.length);
    totalSearches++;
    localStorage.setItem('totalSearches', totalSearches);
    
    currentPage = 1;
    showPage('results');
    displayResults();
    document.getElementById('resultsInput').value = query;
}

// Fuzzy search in document
function searchDocumentFuzzy(query, doc) {
    const queryLower = query.toLowerCase();
    const titleLower = doc.title.toLowerCase();
    const contentLower = doc.content.toLowerCase();
    
    return titleLower.includes(queryLower) || 
           contentLower.includes(queryLower) ||
           calculateFuzzyScore(queryLower, doc) > 50;
}

// Calculate fuzzy matching score
function calculateFuzzyScore(query, doc) {
    const titleLower = doc.title.toLowerCase();
    const contentLower = doc.content.toLowerCase();
    let score = 0;
    
    // Strong matches
    if (titleLower === query) score += 200;
    if (titleLower.includes(query)) score += 100;
    if (contentLower.includes(query)) score += 50;
    
    // Word matches (keywords)
    const queryWords = query.split(' ');
    queryWords.forEach(word => {
        if (word.length > 2) {
            if (titleLower.includes(word)) score += 30;
            if (contentLower.includes(word)) score += 15;
        }
    });
    
    // Only use Levenshtein for short, exact-looking queries (not as primary scorer)
    if (query.length <= 6 && !query.includes(' ')) {
        const titleLev = levenshteinScore(query, titleLower);
        const contentLev = levenshteinScore(query, contentLower);
        // Only add small bonus if distance is very small
        if (titleLev > 80) score += titleLev;
        if (contentLev > 70) score += contentLev / 2;
    }
    
    return score;
}

// Simplified Levenshtein distance scoring
function levenshteinScore(str1, str2) {
    let matches = 0;
    
    for (let i = 0; i < str1.length; i++) {
        if (str2.indexOf(str1[i]) !== -1) {
            matches++;
        }
    }
    
    return (matches / Math.max(str1.length, str2.length)) * 100;
}

function displayResults() {
    const container = document.getElementById('resultsContainer');
    const start = (currentPage - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    const pageResults = currentResults.slice(start, end);
    
    document.getElementById('resultsCount').textContent = 'About ' + currentResults.length + ' results (Page ' + currentPage + ')';
    
    if (pageResults.length === 0) {
        container.innerHTML = '<div class="no-results"><h3>No results found</h3><p>Try different keywords or adjust your filters</p></div>';
    } else {
        container.innerHTML = pageResults.map(result => {
            const displayRelevance = result.relevance ? result.relevance : Math.round(result.fuzzyScore || 0);
            let linksHtml = '';

            // Add core documentation and video links (languageLinks)
            if (result.docs) {
                linksHtml += '<div class="result-links">';
                if (result.docs.docs) linksHtml += '<a href="' + result.docs.docs + '" target="_blank" class="doc-link">📚 Documentation</a>';
                if (result.docs.official) linksHtml += '<a href="' + result.docs.official + '" target="_blank" class="doc-link">🌐 Official</a>';
                if (result.docs.w3schools) linksHtml += '<a href="' + result.docs.w3schools + '" target="_blank" class="doc-link">📖 W3Schools</a>';
                if (result.docs.videos && result.docs.videos.length > 0) linksHtml += '<a href="' + result.docs.videos[0] + '" target="_blank" class="doc-link">🎥 Videos</a>';
                linksHtml += '</div>';
            }

            // Add generated external links (show up to 6 inline)
            if (result.externalLinks && result.externalLinks.length) {
                linksHtml += '<div class="result-links">';
                const maxPreview = 6;
                result.externalLinks.slice(0, maxPreview).forEach((l, idx) => {
                    // show a short label (domain)
                    try {
                        const urlObj = new URL(l);
                        const short = urlObj.hostname.replace('www.', '');
                        linksHtml += '<a href="' + l + '" target="_blank" class="doc-link">🔗 ' + escapeHtml(short) + '</a>';
                    } catch (e) {
                        linksHtml += '<a href="' + l + '" target="_blank" class="doc-link">🔗 Resource ' + (idx+1) + '</a>';
                    }
                });
                // 'More resources' button opens a simple page listing all links
                linksHtml += '<a href="#" onclick="showAllExternalLinks(' + result.id + ');return false;" class="doc-link">🗂️ More resources</a>';
                linksHtml += '</div>';
            }

            return '<div class="result-item">'
                + '<span class="result-language ' + result.language + '">' + result.language.toUpperCase() + '</span>'
                + '<a class="result-title" onclick="showResultDetail(' + result.id + ')">' + escapeHtml(result.title) + '</a>'
                + '<div class="result-url">' + escapeHtml(result.filename) + '</div>'
                + '<div class="result-content">' + escapeHtml(result.content.substring(0, 300)) + '</div>'
                + '<div class="result-relevance">Relevance: ' + displayRelevance + '%</div>'
                + linksHtml
                + '</div>';
        }).join('');
    }
    
    updatePagination();
}

function updatePagination() {
    const totalPages = Math.ceil(currentResults.length / resultsPerPage);
    document.getElementById('pageInfo').textContent = 'Page ' + currentPage + ' of ' + totalPages;
    document.getElementById('prevBtn').disabled = currentPage === 1;
    document.getElementById('nextBtn').disabled = currentPage === totalPages;
}

function nextPage() {
    const totalPages = Math.ceil(currentResults.length / resultsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayResults();
        window.scrollTo(0, 0);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayResults();
        window.scrollTo(0, 0);
    }
}

// Language filter
function updateLanguageFilter() {
    selectedLanguages = [];
    document.querySelectorAll('.language-filter input[type="checkbox"]:checked').forEach(checkbox => {
        selectedLanguages.push(checkbox.value);
    });
    if (selectedLanguages.length === 0) {
        selectedLanguages = ['all'];
        document.querySelector('.language-filter input[value="all"]').checked = true;
    }
}

// Keyboard support
function handleSearchKeypress(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
}

// Search history
function addToHistory(query, resultCount) {
    searchHistory.unshift({
        query: query,
        timestamp: new Date().toLocaleString(),
        resultCount: resultCount
    });
    
    if (searchHistory.length > 50) {
        searchHistory.pop();
    }
    
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    displayHistory();
}

function displayHistory() {
    const historyList = document.getElementById('historyList');
    if (searchHistory.length === 0) {
        historyList.innerHTML = '<p>No search history yet</p>';
        return;
    }
    
    historyList.innerHTML = searchHistory.map((item, index) => 
        '<div class="history-item" onclick="searchQuery(\'' + escapeHtml(item.query) + '\')">' +
        '<strong>' + escapeHtml(item.query) + '</strong> - ' + item.resultCount + ' results<br>' +
        '<small>' + item.timestamp + '</small></div>'
    ).join('');
}

function clearHistory() {
    if (confirm('Are you sure you want to clear search history?')) {
        searchHistory = [];
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        displayHistory();
    }
}

// Dark mode
function toggleDarkMode() {
    const isDark = document.getElementById('darkMode').checked;
    if (isDark) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
}

// Settings
function toggleCompactView() {
    localStorage.setItem('compactView', document.getElementById('compactView').checked);
}

function toggleHistory() {
    localStorage.setItem('enableHistory', document.getElementById('enableHistory').checked);
}

function toggleAutoSuggest() {
    localStorage.setItem('autoSuggest', document.getElementById('autoSuggest').checked);
}

function loadSettings() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    const compactView = localStorage.getItem('compactView') !== 'false';
    const enableHistory = localStorage.getItem('enableHistory') !== 'false';
    const autoSuggest = localStorage.getItem('autoSuggest') !== 'false';
    
    document.getElementById('darkMode').checked = darkMode;
    document.getElementById('compactView').checked = compactView;
    document.getElementById('enableHistory').checked = enableHistory;
    document.getElementById('autoSuggest').checked = autoSuggest;
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Statistics
function updateStats() {
    document.getElementById('totalDocs').textContent = documents.length;
    document.getElementById('totalSearches').textContent = totalSearches;
    document.getElementById('totalHistory').textContent = searchHistory.length;
}

function exportData() {
    const data = {
        searchHistory: searchHistory,
        totalSearches: totalSearches,
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'search_engine_data.json';
    link.click();
}

// Utilities
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function showResultDetail(id) {
    const doc = documents.find(d => d.id == id);
    if (doc) {
        alert('Title: ' + doc.title + '\nLanguage: ' + doc.language + '\nFile: ' + doc.filename + '\n\nContent:\n' + doc.content);
    }
}

// --------------------------
// Authentication UI helpers
// --------------------------
function initAuthUI() {
    try {
        renderAuthControls();
        // Re-render when storage changes (another tab)
        window.addEventListener('storage', function(e) {
            if (e.key === 'devsearchUser') renderAuthControls();
        });
    } catch (e) {
        console.error('initAuthUI error', e);
    }
}

function getStoredUser() {
    try {
        const raw = localStorage.getItem('devsearchUser');
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

function renderAuthControls() {
    const container = document.getElementById('authControls');
    if (!container) return;

    const user = getStoredUser();
    container.innerHTML = '';

    if (user && user.email) {
        // show user chip, profile, and logout
        const chip = document.createElement('div');
        chip.className = 'user-chip';
        chip.innerHTML = `<span class="user-name">${escapeHtml(user.name || user.email)}</span>`;
        container.appendChild(chip);

        const profileLink = document.createElement('a');
        profileLink.className = 'auth-btn profile-btn';
        profileLink.href = 'profile.html';
        profileLink.textContent = 'Profile';
        container.appendChild(profileLink);

        const logoutBtn = document.createElement('button');
        logoutBtn.className = 'auth-btn logout-btn';
        logoutBtn.textContent = 'Log out';
        logoutBtn.onclick = logoutUser;
        container.appendChild(logoutBtn);
    } else {
        const login = document.createElement('a');
        login.className = 'auth-btn login-btn';
        login.href = 'login.html';
        login.textContent = 'Log in';
        container.appendChild(login);

        const signup = document.createElement('a');
        signup.className = 'auth-btn signup-btn';
        signup.href = 'signup.html';
        signup.textContent = 'Sign up';
        container.appendChild(signup);
    }
}

function logoutUser() {
    localStorage.removeItem('devsearchUser');
    renderAuthControls();
    // Optional: redirect to home
    showPage('home');
}

// ============================================
// VOICE SEARCH FUNCTIONALITY
// ============================================
function startVoiceSearch() {
    // Check browser support for Web Speech API
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
        alert('Voice Search not supported in your browser. Please use Chrome, Edge, or Safari.');
        return;
    }

    const recognition = new SpeechRecognition();
    const voiceBtn = document.querySelector('.voice-btn');
    const searchInput = document.getElementById('searchInput');
    
    // Set recognition settings
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.language = 'en-US';

    // Visual feedback - start listening
    voiceBtn.classList.add('listening');
    voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Listening...';
    voiceBtn.style.background = '#ff6b6b';

    recognition.onstart = function() {
        console.log('Voice recognition started');
    };

    recognition.onresult = function(event) {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;

            if (event.results[i].isFinal) {
                finalTranscript += transcript + ' ';
            } else {
                interimTranscript += transcript;
            }
        }

        // Show interim results in search box
        if (interimTranscript) {
            searchInput.value = interimTranscript;
            searchInput.style.opacity = '0.7';
        }

        // Process final results
        if (finalTranscript) {
            searchInput.value = finalTranscript.trim();
            searchInput.style.opacity = '1';
        }
    };

    recognition.onerror = function(event) {
        console.error('Voice recognition error:', event.error);
        
        let errorMsg = 'Voice search error: ' + event.error;
        if (event.error === 'no-speech') {
            errorMsg = 'No speech detected. Please try again.';
        } else if (event.error === 'audio-capture') {
            errorMsg = 'No microphone found. Please check your audio input.';
        } else if (event.error === 'network') {
            errorMsg = 'Network error. Please check your internet connection.';
        }
        
        alert(errorMsg);
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceBtn.style.background = '';
    };

    recognition.onend = function() {
        console.log('Voice recognition ended');
        
        // Reset button
        voiceBtn.classList.remove('listening');
        voiceBtn.innerHTML = '<i class="fas fa-microphone"></i>';
        voiceBtn.style.background = '';

        // Auto-search if text was captured
        if (searchInput.value.trim().length > 0) {
            performSearch();
        }
    };

    // Start listening
    recognition.start();
}

// ============================================
// 3D MOUSE FOLLOW EFFECTS
// ============================================
document.addEventListener('mousemove', function(e) {
    const cards = document.querySelectorAll('.category-card, .result-item, .search-box');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        const angleX = (mouseY - centerY) * 0.1;
        const angleY = (mouseX - centerX) * 0.1;
        const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
        const proximity = Math.max(0, 1 - distance / 500);
        
        // Apply 3D tilt effect
        card.style.transform = `
            perspective(1000px)
            rotateX(${angleX * proximity}deg)
            rotateY(${angleY * proximity}deg)
            scale(${1 + proximity * 0.02})
        `;
        
        // Enhance shadow on proximity
        const shadowStrength = 20 + proximity * 30;
        card.style.boxShadow = `
            0 ${shadowStrength}px ${shadowStrength + 20}px rgba(66, 133, 244, ${0.15 + proximity * 0.15}),
            inset 0 1px 2px rgba(255, 255, 255, 0.5)
        `;
    });
});

// Parallax scroll effect
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const title = document.querySelector('.title');
    
    if (title) {
        title.style.transform = `translateY(${scrollTop * 0.5}px) rotateZ(${scrollTop * 0.01}deg)`;
    }
});