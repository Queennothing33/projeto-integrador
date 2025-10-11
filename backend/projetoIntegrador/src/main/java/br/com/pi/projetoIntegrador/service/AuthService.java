package br.com.pi.projetointegrador.service;

import br.com.pi.projetointegrador.domain.Usuario;
import br.com.pi.projetointegrador.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final UsuarioRepository repo;

    public AuthService(UsuarioRepository repo) {
        this.repo = repo;
    }

    public Usuario login(String login, String senha) {
        return repo.findByLoginAndSenha(login, senha).orElse(null);
    }
}
