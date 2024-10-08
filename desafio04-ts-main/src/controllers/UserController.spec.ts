import { UserController } from "./UserController";
import { UserService } from "../services/UserService";
import { Request } from "express";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn(),
        getAllUsers: jest.fn().mockReturnValue([{ name: "John Doe", email: "john@example.com" }]),
        deleteUser: jest.fn(),
    };

    const userController = new UserController(mockUserService as UserService);

    it("Deve adicionar um novo usuário", () => {
        const mockRequest = {
            body: {
                name: "Wellington",
                email: "Wellington@test.com",
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário criado" });
    });

    it("Deve retornar erro ao tentar adicionar um usuário sem nome", () => {
        const mockRequest = {
            body: {
                email: "Wellington@test.com",
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request! Name obrigatório" });
    });

    it("Deve retornar erro ao tentar adicionar um usuário sem email", () => {
        const mockRequest = {
            body: {
                name: "Wellington",
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.createUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(400);
        expect(mockResponse.state.json).toMatchObject({ message: "Bad request! Email obrigatório" });
    });

    it("Deve retornar todos os usuários", () => {
        const mockRequest = {} as Request;
        const mockResponse = makeMockResponse();
        userController.getAllUsers(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject([{ name: "John Doe", email: "john@example.com" }]);
    });

    it("Deve deletar um usuário", () => {
        const mockRequest = {
            body: {
                name: "Wellington",
                email: "Wellington@test.com",
            },
        } as Request;
        const mockResponse = makeMockResponse();
        userController.deleteUser(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200);
        expect(mockResponse.state.json).toMatchObject({ message: "Usuário deletado" });
    });
});
