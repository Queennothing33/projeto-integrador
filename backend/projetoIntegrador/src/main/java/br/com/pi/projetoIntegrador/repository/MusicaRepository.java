package br.com.pi.projetointegrador.repository;

import br.com.pi.projetointegrador.domain.Musica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusicaRepository extends JpaRepository<Musica, Long> {}
