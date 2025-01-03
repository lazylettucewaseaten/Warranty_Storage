import kingAB from "./assets/AB.png"

export default function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand " href="/">
                <img src={kingAB} alt="Logo" width="50" height="50" class="d-inline-block rounded-pill img-fluid mx-3" />
            
            Warranty Storage</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
              <a class="nav-link" href="/AboutUs">AboutUs</a>
              <a class="nav-link" href="/FAQs">FAQs</a>
              <a class="nav-link " href="/ContactUs">ContactUs</a>
            </div>
          </div>
        </div>
      </nav>
    )
}