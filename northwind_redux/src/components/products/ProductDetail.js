import React from "react";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail =({
    categories,
    product,
    onSave,
    onChange,
    errors
}) =>{
    return (
        <form onSubmit={onSave} className="m-4">
            <h2>{product.id ? "update" : ""}</h2>
            <TextInput
            name="productName"
            label="Product Name"
            value={product.productName}
            onChange={onChange}
            error={errors.productName}/>
            <SelectInput
            name="categoryId"
            label="Category"
            defaultOption="Select..."
            value={product.categoryId || ""}
            options={categories.map(category => ({
                value: category.id,
                text : category.categoryName
            }))}
            onChange={onChange}
            error={errors.categoryId}/>
            <TextInput
            name="unitPrice"
            label="Unit Price"
            value={product.unitPrice}
            onChange={onChange}
            error={errors.unitPrice}/>
            <TextInput
            name="quantityPerUnit"
            label="Quantity Per Unit"
            value={product.quantityPerUnit}
            onChange={onChange}
            error={errors.quantityPerUnit}/>
            <button type="submit"
            className="btn btn-success mt-4">
                Save
            </button>
        </form>
    )
}

export default ProductDetail;