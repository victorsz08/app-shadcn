




export type StatusType = "PENDENTE" | "CONECTADO" | "CANCELADO";


export interface OrderDataType {
    id: string;
    number: number;
    local: string;
    schedulingDate: Date;
    schedulingTime: string;
    status: StatusType;
    price: number;
    contact: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
};