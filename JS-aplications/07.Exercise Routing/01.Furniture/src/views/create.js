import { createItem } from '../api/data.js';
import { html } from '../lib.js'

const createTemplate = (onSubmit, errorMsg, errors) => html` <div class="row space-top">
${errorMsg ? html`<div class="form-group error">${errorMsg}</div>` : null}
<div class="col-md-12">
    <h1>Create New Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit = ${onSubmit}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class=${"form-control" + (errors.make ? ' is-invalid' : '')} id="new-make" type="text" name="make">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class=${"form-control" + (errors.model ? ' is-invalid' : '')} id="new-model" type="text" name="model">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class=${"form-control" + (errors.year ? ' is-invalid' : '')} id="new-year" type="number" name="year">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class=${"form-control" + (errors.description ? ' is-invalid' : '')} id="new-description" type="text" name="description">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class=${"form-control" + (errors.price ? ' is-invalid' : '')} id="new-price" type="number" name="price">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class=${"form-control" + (errors.img ? ' is-invalid' : '')} id="new-image" type="text" name="img">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material">
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
    </div>
</div>
</form>`

export function createView(ctx) {

    update(null, {});

    function update(errorMsg, errors) {
        ctx.render(createTemplate(onSubmit, errorMsg, errors))
    };

    async function onSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
    
        const missing = Object.entries(data).filter(([k, v]) => k != "material" && v.trim() == "")
        console.log(missing);
        try {
            if (missing.length > 0) {
                const errors = {}
                missing.forEach(([a, b]) => errors[a] = true)

                throw {
                    error: new Error("Please fill all mandatory fields"), //return alert("Please fill all mandatory fields");
                    errors
                }
            }
            const result = await createItem(data);
            e.target.reset();
            ctx.page.redirect('/');
        } catch (err) {
            const message = err.message || err.error.message;
            update(message, err.errors || {});
        }

    }
}