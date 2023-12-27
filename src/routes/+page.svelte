<script>
    import { onMount } from "svelte";
    import { gsap } from "gsap";
    import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

    onMount(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from("#l1", {
            scrollTrigger: {
                trigger: "#l1",
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
            y: 100,
        });

        // gsap.from("#l0", {
        //     y: 50,
        //     duration: 1,
        // });
        // gsap.from("#l1", {
        //     y: 100,
        //     duration: 1,
        // });
        // gsap.from("#l2", {
        //     y: 150,
        //     duration: 1,
        // });
        // gsap.from("#l3", {
        //     y: 200,
        //     duration: 1,
        // });
        // gsap.from("#l4", {
        //     y: 250,
        //     duration: 1,
        // });
        // gsap.from("#l5", {
        //     y: 300,
        //     duration: 1,
        // });
        // gsap.from("#l6", {
        //     y: 350,
        //     duration: 1,
        // });
    });
</script>

<body>
    <header>
        <a href="/" class="logo">I Love Web:)</a>
        <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Events</a></li>
            <li><a href="/">Contact</a></li>
        </nav>
    </header>

    <section class="parallax">
        <img src="/layer_0 1.svg" id="l0" alt="" />
        <img src="/layer_1 1.svg" id="l1" alt="" />
        <img src="/layer_2 1.svg" id="l2" alt="" />
        <img src="/layer_3 1.svg" id="l3" alt="" />
        <img src="/layer_4 1.svg" id="l4" alt="" />
        <img src="/layer_5_2 1.svg" id="l5" alt="" />
        <img src="/layer_6 1.svg" id="l6" alt="" />
    </section>

    <main>
        <h2>I Love Web:)</h2>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            tempora impedit quam nihil dolorem autem repudiandae omnis beatae
            labore facere maxime saepe et, non dolor soluta ex sunt obcaecati
            sint neque reiciendis culpa! Quia vel mollitia, a illum animi
            quibusdam quas! Repudiandae illo aspernatur hic officiis animi nemo
            nobis deserunt id vel, laudantium, consequatur dolore nam?
            Repellendus sint nobis necessitatibus voluptatem nesciunt ad
            aspernatur nostrum, enim neque reiciendis assumenda modi
            voluptatibus? Suscipit sapiente culpa ratione adipisci neque eum
            tenetur voluptatum, blanditiis minima minus tempora excepturi sequi
            cum repudiandae nisi voluptas rem quod? Sed dolorum impedit
            architecto excepturi perferendis illo nostrum suscipit debitis non
            sapiente! Expedita voluptatibus ex aperiam libero nam, cumque
            consequatur sunt accusantium maxime officia vero magni error totam
            quos? Doloremque praesentium unde ab a error soluta sunt velit
            quidem quasi. Possimus, accusantium, vitae modi dolor sapiente
            corrupti fuga rerum molestiae, iusto odio et! Facilis fuga
            reprehenderit illo beatae, praesentium velit nihil nisi ipsum
            delectus omnis voluptatum ea a voluptatem, repellendus adipisci,
            temporibus similique autem optio veniam quam aliquam. Perspiciatis
            ullam sequi delectus recusandae quod quam facere fugiat dolores
            maiores sapiente ea laudantium consectetur aliquid labore, odio
            modi. Sed rerum ipsam eligendi id tempora dolore incidunt
            repudiandae odit consequuntur dicta soluta, quae culpa consequatur
            voluptate ab earum assumenda dolorum praesentium sequi neque
            dignissimos iure sapiente perferendis. Ex magni quo libero officia!
            Asperiores assumenda autem excepturi laudantium fugit! In dolor
            maxime nostrum, laudantium fugit deleniti quis odit iste debitis
            sint ipsum totam labore ad mollitia? Natus itaque enim et maiores
            neque corporis consectetur veniam labore. Quo vitae delectus et
            recusandae animi totam veniam sequi praesentium hic, nemo aliquid
            quisquam adipisci ex ut officiis odio ad illum architecto dicta
            inventore laudantium. Error vel quidem dolorem tempora officiis at!
            Reiciendis excepturi qui adipisci totam, aspernatur eligendi unde
            quo consequatur! Dolorum, repudiandae excepturi! Ipsa corrupti
            recusandae tempore cupiditate dicta deserunt aliquid nulla.
            Perspiciatis hic iste natus. Quibusdam reprehenderit maiores
            laboriosam est. Voluptatibus commodi eveniet aspernatur ab doloribus
            totam quia quisquam, esse atque enim ratione dignissimos veritatis
            aut fuga ipsa laborum a fugit molestiae pariatur quos dolor
            repellendus tenetur alias. Reprehenderit sit, cupiditate aliquam rem
            hic ut praesentium eaque explicabo. Maxime fuga pariatur blanditiis
            ad natus quia dolore ratione, iusto omnis dolor, error fugiat,
            officia illo neque odit. Cupiditate ipsa voluptas consequuntur
            maxime placeat fugiat amet libero saepe provident ratione minima
            consequatur omnis sint facilis voluptate illum explicabo magnam
            tempora impedit quaerat, fugit animi dicta, quos aliquid. Deleniti
            animi itaque porro libero ut nam est eos non maxime eum omnis quasi
            totam nisi sed veniam aliquid saepe, autem at velit. Quae nihil
            tempora perferendis voluptates. Praesentium deleniti sit eligendi
            dicta quis ad pariatur fugiat maiores quia velit sapiente recusandae
            debitis asperiores porro eum aperiam assumenda voluptate expedita,
            aut earum sunt. Laborum placeat dignissimos, obcaecati possimus quas
            voluptatum atque doloribus corrupti. Magni consequuntur ut tempora
            facilis nostrum explicabo. Dolore, a. Iste aspernatur alias,
            distinctio qui praesentium nisi rerum hic itaque fugiat dolorum amet
            dignissimos officia repellendus harum quia ullam facere facilis
            quisquam quidem quo. Accusantium.
        </p>
    </main>
</body>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    :root {
        --color-bg: #fedcc8;
        --color-orange1: #ff7e4a;
        --color-orange2: #ff583d;
        --color-red1: #ee4339;
        --color-red2: #c9283e;
        --color-purple1: #7e0031;
        --color-purple2: #2d112b;

        --color-text: #fedcc8;
        --color-text2: #000000;
    }

    body {
        background-color: var(--color-purple2);
        overflow-x: hidden;
        font-family: "Libre Franklin", sans-serif;
    }

    main {
        position: relative;
        padding: 100px;
        color: var(--color-bg);
    }

    main h2 {
        font-size: 3em;
        margin-bottom: 10px;
    }

    main p {
        font-size: 1em;
        font-weight: 300;
    }

    header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
    }

    .logo {
        color: var(--color-purple2);
        font-weight: 700;
        font-size: 2em;
        text-decoration: none;
        margin-left: 4rem;
    }

    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-right: 4rem;
    }

    nav li {
        list-style: none;
        font-weight: 500;
    }

    nav li a {
        text-decoration: none;
        padding: 6px 15px;
        background: var(--color-purple2);
        color: var(--color-text);
        border-radius: 20px;
    }

    nav li a:hover {
        background: var(--color-purple1);
        color: var(--color-text);
    }

    .parallax {
        background-color: var(--color-bg);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        /* margin-left: -50%; */
    }

    .parallax img {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%;
        pointer-events: none;
    }
</style>
