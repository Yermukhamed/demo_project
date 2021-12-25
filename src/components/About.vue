<template>
      <div class="h4 text-center mb-4 title" style="margin-top: 50px; padding-top: 10px;">Team Info</div>
    <div class="team">

        <div class="card" style="width: 18rem; display: flex; margin-left: 30px;">
            <img src="data:image/jpeg;base64,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"
                class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Abishev Daulet</h5>
                <p class="card-text">ID:200103226</p>
                <p class="card-text">Coding.</p>
                <a href="https://www.instagram.com/d__abishev/?hl=ru" class="btn btn-primary">Contact</a>
            </div>
        </div>

        <div class="card" style="width: 18rem; display: flex; margin-left: 30px;">
            <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Tilek Yermukhamed</h5>
                <p class="card-text">ID:200103094</p>
                <p class="card-text">Coding.</p>
                <a href="https://www.instagram.com/whyjoqsoul/?hl=ru" class="btn btn-primary">Contact</a>
            </div>
        </div>

        <div class="card" style="width: 18rem; display: flex; margin-left: 30px;">
            <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Yermurat Nurmukhanov</h5>
                <p class="card-text">ID:200103339</p>
                <p class="card-text">UI/UX</p>
                <a href="https://www.instagram.com/nurmukhanovvvv/?hl=ru" class="btn btn-primary">Contact</a>
            </div>
        </div>

        <div class="card" style="width: 18rem; display: flex; margin-left: 30px;">
            <img src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Imangali Zholdas</h5>
                <p class="card-text">ID:200103132</p>
                <p class="card-text">Content.</p>
                <a href="https://www.instagram.com/nurmukhanovvvv/?hl=ru" class="btn btn-primary">Contact</a>
            </div>
        </div>

    </div>



    <div class="section" id="experience">
        <div class="container cc-experience" id="experience">
            <div class="h4 text-center mb-4 title">Project Info</div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary">
                        <div class="card-body cc-experience-header">
                            <div class="h5">Purpose</div>
                        </div>
                    </div>
                    <div class="col-md-9 ">
                        <div class="card-body">
                            <div class="h5">Content about Art</div>
                            <p>The basic goal of this project is educational and enjoyable content for people.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary ">
                        <div class="card-body cc-experience-header">

                            <div class="h5">Users</div>
                        </div>
                    </div>
                    <div class="col-md-9 ">
                        <div class="card-body">
                            <div class="h5">Everyone</div>
                            <p>Everyone who interested in art or just wasting time in the internet can visit our site to their purpose, read something, see something and put full grade to the final.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="row">
                    <div class="col-md-3 bg-primary ">
                        <div class="card-body cc-experience-header">

                            <div class="h5">Functional Requirements</div>
                        </div>
                    </div>
                    <div class="col-md-9 ">
                        <div class="card-body">
                            <div class="h5">Everyone</div>
                            <p>The product is educational purposed content where people can learn something new and interesting for themselves during rolling the mouse and checking the data in the web page. So, this product for people of any age category,
                                just everybone can visit without any prohibitions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.section {
    padding-bottom: 0;
}

.section {
    padding: 70px 0;
    position: relative;
    background: #fff;
}

.container {
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
    width: 80%;
}

.title {
    font-weight: 700;
}

.h4 {
    font-size: 1.714em;
    line-height: 1.45em;
    margin-top: 30px;
    margin-bottom: 15px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.card {
    border: 0;
    border-radius: 00.1875rem;
    display: inline-block;
    position: relative;
    overflow: hidden;
    width: 90%;
    margin-top: 40px;
    margin-bottom: 20px;
    box-shadow: 0 5px 25px 0 rgb(0 0 0 / 20%);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 0.25rem;
}

.card .card-body {
    min-height: 190px;
}

.card-body {
    flex: 1 1 auto;
    padding: 1.25rem;
}

.cc-experience .cc-experience-header {
    padding-top: 60px;
    padding-right: 0;
    text-align: center;
    color: black;
    text-transform: uppercase;
}

.h5 {
    font-size: 1.57em;
    line-height: 1.4em;
    margin-bottom: 15px;
}

.team {
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 100px;
}

.col {
    border: 5px solid red;
}
</style>
<script>

export default {
  name: 'About',
  components: {
    
  }
}
</script>