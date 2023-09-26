function applyDiscount(productId) {
    const discountCodeInput = document.getElementById("discountCode" + productId);
    const quantitySpan = document.getElementById("quantity" + productId);
    
    const discountCode = discountCodeInput.value;
    // Xử lý áp dụng mã giảm giá ở đây
    
    // Ví dụ: Nếu discountCode là "SAVE10", giảm giá 10%
    if (discountCode === "SAVE10") {
        // Tính lại giá sau khi áp dụng giảm giá
        // Ví dụ: Giảm 10% từ giá gốc $50
        const originalPrice = 50;
        const discountedPrice = originalPrice * 0.9; // Giảm 10%
        
        // Cập nhật số lượng và giá trên giao diện
        quantitySpan.textContent = parseInt(quantitySpan.textContent) + 1;
        // Cập nhật giá sau khi áp dụng giảm giá
        // Đặt lại giá sau khi giảm giá
    }
}