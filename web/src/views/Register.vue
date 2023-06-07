<template>
  <section>
    <router-link to="/">
        <img class="close-icon" src="@/assets/icons/close_white_48dp.svg" alt="">
    </router-link>
    <div class="img-box">
        <img src="@/assets/imgs/woman-background.jpg" alt="">
    </div>
    <div class="register-box">
        <div class="title">
            <h2>Cadastre-se</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic incidunt tenetur nobis fugit enim soluta, nemo dolor ducimus odio voluptate!</p>
        </div>

        <form name="contact" class="contact-inform form">
			<div class="form-control">
				<input type="text" name="name" class="form-input" placeholder="none" required>
				<label for="name" class="form-label">Nome</label>
			</div>
            <div class="input-columns">
                <div class="form-control">
                    <input type="email" name="email" class="form-input" placeholder="none" required>
                    <label for="email" class="form-label">Email</label>
			    </div>
                <div class="form-control">
                    <input type="email" name="email" class="form-input" placeholder="none" required>
                    <label for="email" class="form-label">Confirmar E-mail</label>   
                </div>
            </div>
            <div class="input-columns">
                <div class="form-control">
                    <input type="password" name="password" class="form-input" placeholder="none" required>
                    <label for="password" class="form-label">Senha</label>
			    </div>
                <div class="form-control">
                    <input type="password" name="password" class="form-input" placeholder="none" required>
                    <label for="password" class="form-label">Confirmar Senha</label>
			    </div>
            </div>
            <div class="submit-button">
                <input type="submit" value="Cadastrar">
            </div>
		</form>
    </div>
  </section>
</template>

<script>
export default {
    name: "Register"
}
</script>

<style scoped>
    section {
        position: relative;
        display: flex;
        width: 100%;
        height: 100vh;
    }

    .close-icon {
        position: absolute;
        right: 2rem;
        top: 2rem;
    }
    
    .img-box {
        height: 100%;
        border: none;
        border-radius: 5px;
    }
    
    .img-box img {
        width: 100%;
        height: 100%;
    }

    .register-box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 60%;
    }

    .title {
        width: 50%;
        margin: 0 auto;
    }

    h2 {
        font-size: 3rem;
    }

    p {
        letter-spacing: 1px;
        max-width: 500px;
    }

    form {
        width: 50%;
    }

    .input-columns {
        display: flex;
        gap: 1rem;
        margin: .80rem 0;
    }

    .form-control {
        position: relative;
        width: 100%;
        height: 3rem;
        margin-bottom: 1.5rem;
    }
 
    .form-label {
        position: absolute;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: inherit;
        left: 1rem;
        top: 0.75rem;
        padding: 0 0.25rem;
        color: black;
        background: #fff;
        transition: all 0.3s ease;
    }

    .form-input {
        position: absolute;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: inherit;
        top: 0;
        left: 0;
        z-index: 1;
        resize: none;
        width: 100%;
        height: auto;
        padding: 0.75rem 1.25rem;
        border-radius: 0.25rem;
        border: 1px solid #fff;
        color: black;
        background: transparent;
        transition: all 0.2s ease-in-out;
    }

    .form-input::placeholder {
        opacity: 0;
        visibility: hidden;
        color: transparent;
    }

    .form-input:focus {
        outline: none;
        border: 2px solid #fff;
    }

    .form-input:focus ~ .form-label {
        top: -0.75rem;
        left: 1rem;
        z-index: 5;
        font-size: 0.875rem;
        font-weight: 500;
        color: black;
        transition: all 0.2s ease-in-out;
    }

    .form-input:not(:placeholder-shown).form-input:not(:focus) ~ .form-label {
        top: -0.75rem;
        left: 1rem;
        z-index: 9;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.2s ease-in-out;
    }

    .contact-column {
        max-width: 30rem;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .contact-inform {
        padding: 4rem 2rem 2rem;
        border-radius: 0.25rem;
        color: black;
        background: #fff;
    }

    .submit-button {
        display: flex;
        justify-content: center;
    }

    input[type=submit] {
        padding: .5rem 1rem;
        width: 50%;
        background: #151515;
        color: #fff;
        font-weight: 700;
        border: none;
        border-radius: 5px;
        transition: 200ms;
        cursor: pointer;
    }

    input[type=submit]:hover {
        background: #2c2a2a;
    }
</style>