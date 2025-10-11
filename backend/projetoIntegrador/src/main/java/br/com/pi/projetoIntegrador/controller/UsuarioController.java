package br.com.pi.projetointegrador.controller;

import br.com.pi.projetointegrador.domain.Usuario;
import br.com.pi.projetointegrador.service.AuthService;
import br.com.pi.projetointegrador.repository.UsuarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioController {

    private final UsuarioRepository repo;
    private final AuthService auth;

    public UsuarioController(UsuarioRepository repo, AuthService auth) {
        this.repo = repo;
        this.auth = auth;
    }

    @GetMapping
    public List<Usuario> listar() {
        return repo.findAll();
    }

    @PostMapping
    public ResponseEntity<Usuario> criar(@RequestBody Usuario usuario) {
        Usuario u = repo.save(usuario);
        return ResponseEntity.created(URI.create("/api/usuarios/" + u.getId())).body(u);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Usuario usuario) {
        Usuario u = auth.login(usuario.getLogin(), usuario.getSenha());
        return (u != null) ? ResponseEntity.ok(u) : ResponseEntity.status(401).body("Usuário ou senha inválidos");
    }
}
