package br.com.pi.projetointegrador.service;

import br.com.pi.projetointegrador.domain.Musica;
import br.com.pi.projetointegrador.repository.MusicaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicaService {
    private final MusicaRepository repo;

    public MusicaService(MusicaRepository repo) {
        this.repo = repo;
    }

    public List<Musica> listar() { return repo.findAll(); }
    public Musica salvar(Musica m) { return repo.save(m); }
    public void excluir(Long id) { repo.deleteById(id); }
}

