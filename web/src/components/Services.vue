<template>
  <section>
    <h2>Serviços</h2>
    <div class="services">
        <div class="services-box">
            <img src="https://images.unsplash.com/photo-1532384661798-58b53a4fbe37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
            <h3>Hipertrofia</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, error impedit sit alias, illum nobis tenetur quisquam fugit unde cupiditate, assumenda consequuntur. Nobis quis facilis dignissimos est numquam, distinctio alias.
            </p>
            <a href="#">Inscreva-se</a>
        </div>
        <div class="services-box">
            <img src="@/assets/imgs/lose-w.jpg" alt="">
            <h3>Emagrecimento</h3>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam expedita id, sapiente molestias eaque voluptatem libero accusamus voluptatum harum dolor maxime incidunt architecto quis cupiditate fugiat provident iusto nisi iste!
            </p>
            <a href="#">Inscreva-se</a>
        </div>
        <div class="services-box">
            <img src="https://images.unsplash.com/photo-1619385006580-6f5550cabbb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="">
            <h3>Adaptação</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi minus facere consequuntur laboriosam voluptatum, quo animi nulla debitis sed porro qui ea molestias quia temporibus autem tempora dolor voluptates! Minus?</p>
            <a href="#">Inscreva-se</a>
        </div>
    </div>
  </section>
</template>

<script>
export default {
    name: "Services"
}
</script>

<style scoped>
    section {
        width: 80%;
        margin: 2rem auto;
    }

    h2 {
        font-size: 2.5rem;
   }

    .services {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .services-box {
        padding: 1.5rem;
        height: 100%;
    }

    h3 {
        border-bottom: 2px solid #fff;
        padding-bottom: 1rem;
    }

    p {
        text-align: justify;
        margin: 2rem 0;
    }


    a {
        padding: 1rem;
        background: #fff;
        color: rgba(0,0 , 0, .8);
        font-weight: 700;
        text-decoration: none;
        transition: 400ms;
        border: none;
        border-radius: 5px;
    }

    a:hover {
        background: #9c9a9a;
    }

    img {
        height: 20rem;
        width: 100%;
        border: none;
        border-radius: 5px;
        margin: 2rem 0;
    }
</style>