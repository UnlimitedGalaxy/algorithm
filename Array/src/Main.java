public class Main {
  public static void main(String[] args) {
    int[] arr = new int[10];
    for (int i = 0; i < arr.length; i ++) {
      arr[i] = i;
    }

    int[] scores = new int[]{100, 99, 66};
    for (int score: scores) {
      System.out.println(score);
    }
  }
}
