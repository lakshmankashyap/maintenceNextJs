const Maintenance = () => {
  return (
    <>
      <head>
        <title>Den Domains</title>
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
          className="next-head"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        <div id="wrapper">
          <div>
            <article>
              <div className="img">
                <img src="/DenDomainsLogo.png" width="100%" />
              </div>
              <h1>We are upgrading our servers. We will be back soon!</h1>
            </article>
          </div>
        </div>
      </body>
      <style jsx>{`
        #wrapper {
          margin-top: 10%;
        }
        h1 {
          font-size: 1.5rem;
          color: #362d6c;
        }
        body {
          font: 20px Helvetica, sans-serif;
          color: #333;
          background: aliceblue !important;
        }
        .img {
          width: 50%;
          margin: 10px auto;
        }
        article {
          display: block;
          text-align: center;
          width: 650px;
          margin: 30px auto;
        }
      `}</style>
    </>
  );
};

export default Maintenance;
