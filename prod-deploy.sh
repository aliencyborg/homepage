git fetch . HEAD:prod &&
  git push origin --all && git push origin --tags &&
  ansible-playbook -t prod playbook.yml
