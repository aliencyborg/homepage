git fetch . HEAD:stage &&
  git push origin --all && git push origin --tags &&
  ansible-playbook -t stage playbook.yml
