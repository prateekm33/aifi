#include <stdio.h>

int aifi(int n);
int atoi(char *str);

int main (int argc, char **argv)
{
  int n = atoi(argv[1]);
  if (n < 0) {
    printf("An incorrect number of cards, %d, has been given. Please make sure it is >= 0\n", n);
    return 1;
  }
  else
    printf("The number of rounds needed to put a deck of %d cards back in the original order is %d \n", n, aifi(n));
  return 0;
}

int aifi(int n)
{
  return n;
}