




export function formatCurrency(value: number) {
    const valueFormatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(value);

    return valueFormatted;
};

export function formatPercent(value: number) {
    const valueFormatted = new Intl.NumberFormat("pt-BR", {
        style: "percent",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);

    return valueFormatted;
};  