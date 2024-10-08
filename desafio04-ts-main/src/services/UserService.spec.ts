import { User, UserService } from "./UserService";

describe("UserService", () => {
    const mockDb: User[] = [];
    const userService = new UserService(mockDb);

    it("Deve adicionar um novo usuário", () => {
        const mockConsole = jest.spyOn(global.console, "log");
        userService.createUser("Wellington", "Wellington@test.com");
        expect(mockConsole).toHaveBeenCalledWith("DB atualizado", mockDb);
        expect(mockDb).toContainEqual({ name: "Wellington", email: "Wellington@test.com" });
    });

    it("Deve retornar todos os usuários", () => {
        userService.createUser("Joana", "joana@dio.com");
        const users = userService.getAllUsers();
        expect(users).toEqual(mockDb);
    });

    it("Deve deletar um usuário", () => {
        const userToDelete = { name: "Joana", email: "joana@dio.com" };
        userService.createUser(userToDelete.name, userToDelete.email);
        userService.deleteUser(userToDelete);
        expect(mockDb).not.toContainEqual(userToDelete);
    });
});
