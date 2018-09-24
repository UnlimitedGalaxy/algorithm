public class Puppy {
  public Puppy(){

  }

  public Puppy(String name){
    // 这个构造器仅有一个参数：name
  }

  public static void main(String []args){
    /* 创建对象 */
    Puppy myPuppy = new Puppy("tommy" );
    Puppy anonymousPuppy = new Puppy();
  }
}
