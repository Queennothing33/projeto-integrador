package br.com.pi.projetointegrador.controller;

import br.com.pi.projetointegrador.domain.Musica;
import br.com.pi.projetointegrador.service.MusicaService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/musicas")
@CrossOrigin(origins = "*")
public class MusicaController {

    private final MusicaService service;

    public MusicaController(MusicaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Musica> listar() {
        return service.listar();
    }

    @PostMapping
    public Musica salvar(@RequestBody Musica musica) {
        return service.salvar(musica);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id) {
        service.excluir(id);
        return ResponseEntity.noContent().build();
    }
}
