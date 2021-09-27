import { Usuario } from './Usuario';

describe('Participant', () => {
  test('should create participant', () => {
    const p = new Usuario('ricardo', '986060606')
    expect(p.nome).toBe('ricardo')
    expect(p.telefone).toBe('986060606')
  })
})
